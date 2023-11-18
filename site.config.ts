import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // https://daifengli.notion.site/daifengli/Daifeng-Li-2f5adcca64b041908c04953e7b448c1e
  rootNotionPageId: '2f5adcca64b041908c04953e7b448c1e',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Daifeng Li Personal Site',
  domain: 'daifeng.site',
  author: 'Daifeng Li',

  // open graph metadata (optional)
  description: 'Daifeng Li Personal Site',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'Undefinedefity', // https://github.com/Undefinedefity
  bilibili: '85452198', // https://space.bilibili.com/85452198
  zhihu: 'li-dai-feng-38', // https://www.zhihu.com/people/li-dai-feng-38
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '中文',
      pageId: '2f5adcca64b041908c04953e7b448c1e'
    },
    {
      title: 'English',
      pageId: '444c57f6e6fe42f9bf47b5cb91fecf93'
    },
    {
      title: 'Projects',
      pageId: '602550ae56f74dab987605aa0c8e1058'
    },
    {
      title: '个人简历',
      pageId: '702fb15e3815418889ccb654404c6381'
    }
  ]
})
