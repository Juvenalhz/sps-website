import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'urb5qo9n',
    dataset: 'production'
  },
  studioHost: 'sps-website',
  deployment: {
    appId: 'vqp7gdk2bhxnwgg8z8o2hmxn',
    autoUpdates: true,
  },
})
