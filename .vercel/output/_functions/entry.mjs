import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CF_4MMl6.mjs';
import { manifest } from './manifest_Dsyt38vY.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/data/issue/post.astro.mjs');
const _page2 = () => import('./pages/data/issue/update.astro.mjs');
const _page3 = () => import('./pages/data/issue.astro.mjs');
const _page4 = () => import('./pages/data/profile.astro.mjs');
const _page5 = () => import('./pages/data/project/post.astro.mjs');
const _page6 = () => import('./pages/data/project.astro.mjs');
const _page7 = () => import('./pages/data/projects.astro.mjs');
const _page8 = () => import('./pages/influencer/confirmed.astro.mjs');
const _page9 = () => import('./pages/influencer/history.astro.mjs');
const _page10 = () => import('./pages/influencer/project.astro.mjs');
const _page11 = () => import('./pages/influencer/welcome.astro.mjs');
const _page12 = () => import('./pages/influencer/work.astro.mjs');
const _page13 = () => import('./pages/login/callback.astro.mjs');
const _page14 = () => import('./pages/login/getting-started.astro.mjs');
const _page15 = () => import('./pages/login.astro.mjs');
const _page16 = () => import('./pages/maintainer/balance.astro.mjs');
const _page17 = () => import('./pages/maintainer/cbalance.astro.mjs');
const _page18 = () => import('./pages/maintainer/cwork.astro.mjs');
const _page19 = () => import('./pages/maintainer/marketing.astro.mjs');
const _page20 = () => import('./pages/maintainer/work.astro.mjs');
const _page21 = () => import('./pages/meta/contributor.astro.mjs');
const _page22 = () => import('./pages/meta/influencer.astro.mjs');
const _page23 = () => import('./pages/meta/policy.astro.mjs');
const _page24 = () => import('./pages/meta/quest.astro.mjs');
const _page25 = () => import('./pages/meta/team.astro.mjs');
const _page26 = () => import('./pages/meta/work.astro.mjs');
const _page27 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.11.0_@types+node@24.0.13_jiti@2.4.2_lightningcss@1.30.1_rollup@4.44.2_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/data/issue/post.astro", _page1],
    ["src/pages/data/issue/update.astro", _page2],
    ["src/pages/data/issue/index.astro", _page3],
    ["src/pages/data/profile/index.astro", _page4],
    ["src/pages/data/project/post.astro", _page5],
    ["src/pages/data/project/index.astro", _page6],
    ["src/pages/data/projects/index.astro", _page7],
    ["src/pages/influencer/confirmed.astro", _page8],
    ["src/pages/influencer/history.astro", _page9],
    ["src/pages/influencer/project.astro", _page10],
    ["src/pages/influencer/welcome.astro", _page11],
    ["src/pages/influencer/work.astro", _page12],
    ["src/pages/login/callback.astro", _page13],
    ["src/pages/login/getting-started.astro", _page14],
    ["src/pages/login/index.astro", _page15],
    ["src/pages/maintainer/balance.astro", _page16],
    ["src/pages/maintainer/cbalance.astro", _page17],
    ["src/pages/maintainer/cwork.astro", _page18],
    ["src/pages/maintainer/marketing.astro", _page19],
    ["src/pages/maintainer/work.astro", _page20],
    ["src/pages/meta/contributor.astro", _page21],
    ["src/pages/meta/influencer.astro", _page22],
    ["src/pages/meta/policy.astro", _page23],
    ["src/pages/meta/quest.astro", _page24],
    ["src/pages/meta/team.astro", _page25],
    ["src/pages/meta/work.astro", _page26],
    ["src/pages/index.astro", _page27]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "aae90dc4-12bc-48f4-88d9-53821cd7d1a2",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
