import type { Plugin } from "vite";

export type SitemapEntry = {
    path: string;
    lastmod?: string;
};

type SitemapPluginOptions = {
    hostname: string;
    entries: SitemapEntry[];
};

function escapeXml(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&apos;");
}

function normalizePath(path: string): string {
    const trimmedPath = path.trim();

    if (trimmedPath === "" || trimmedPath === "/") {
        return "/";
    }

    return `/${trimmedPath.replace(/^\/+|\/+$/g, "")}`;
}

function normalizeHostname(hostname: string): string {
    return hostname.endsWith("/")
        ? hostname
        : `${hostname}/`;
}

function createAbsoluteUrl(
    hostname: string,
    path: string
): string {
    const baseUrl = normalizeHostname(hostname);
    const normalizedPath = normalizePath(path);

    if (normalizedPath === "/") {
        return new URL(baseUrl).toString();
    }

    return new URL(
        normalizedPath.slice(1),
        baseUrl
    ).toString();
}

function validateLastmod(
    lastmod: string | undefined,
    path: string
): void {
    if (lastmod === undefined) {
        return;
    }

    if (Number.isNaN(Date.parse(lastmod))) {
        throw new Error(
            `[Sitemap error] "${path}" has an invalid lastmod: "${lastmod}"`
        );
    }
}

function removeDuplicateEntries(
    entries: SitemapEntry[]
): SitemapEntry[] {
    const entriesByPath = new Map<string, SitemapEntry>();

    for (const entry of entries) {
        const normalizedPath = normalizePath(entry.path);

        validateLastmod(entry.lastmod, normalizedPath);

        if (entriesByPath.has(normalizedPath)) {
            throw new Error(
                `[Sitemap error] Duplicate route: "${normalizedPath}"`
            );
        }

        entriesByPath.set(normalizedPath, {
            ...entry,
            path: normalizedPath,
        });
    }

    return [...entriesByPath.values()];
}

function createSitemapXml(
    hostname: string,
    entries: SitemapEntry[]
): string {
    const urls = entries
        .map((entry) => {
            const absoluteUrl = createAbsoluteUrl(
                hostname,
                entry.path
            );

            const lastmod = entry.lastmod
                ? `\n        <lastmod>${escapeXml(entry.lastmod)}</lastmod>`
                : "";

            return [
                "    <url>",
                `        <loc>${escapeXml(absoluteUrl)}</loc>${lastmod}`,
                "    </url>",
            ].join("\n");
        })
        .join("\n");

    return [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        urls,
        "</urlset>",
        "",
    ].join("\n");
}

function createRobotsTxt(hostname: string): string {
    const sitemapUrl = createAbsoluteUrl(
        hostname,
        "/sitemap.xml"
    );

    return [
        "User-agent: *",
        "Allow: /",
        "",
        `Sitemap: ${sitemapUrl}`,
        "",
    ].join("\n");
}

export function sitemapPlugin(
    options: SitemapPluginOptions
): Plugin {
    const entries = removeDuplicateEntries(options.entries);

    return {
        name: "portfolio-sitemap",
        apply: "build",

        generateBundle() {
            this.emitFile({
                type: "asset",
                fileName: "sitemap.xml",
                source: createSitemapXml(
                    options.hostname,
                    entries
                ),
            });

            this.emitFile({
                type: "asset",
                fileName: "robots.txt",
                source: createRobotsTxt(
                    options.hostname
                ),
            });
        },

        // 以前のvite-plugin-sitemapと同じように
        // index.htmlへsitemapへのリンクを追加する
        transformIndexHtml() {
            return [
                {
                    tag: "link",
                    attrs: {
                        rel: "sitemap",
                        type: "application/xml",
                        href: "/sitemap.xml",
                    },
                    injectTo: "head",
                },
            ];
        },
    };
}