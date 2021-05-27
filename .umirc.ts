import { defineConfig } from 'umi';

export default defineConfig({
  base: '/bitcoin-playground',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/components/Layout/index',
      routes: [
        { path: '/hd', component: '@/pages/hd' },
        { path: '/mw', component: '@/pages/mw' },
        { path: '/ms', component: '@/pages/ms' },
      ],
    },
  ],
  fastRefresh: {},
  antd: {
    dark: true,
  },
  dynamicImport: {},
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'gzip',
  },
});
