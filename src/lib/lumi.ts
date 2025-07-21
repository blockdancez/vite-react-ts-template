import { createClient } from '@lumi.new/sdk'

export const lumi = createClient({
  projectId: '{{PROJECT_ID}}',
  apiBaseUrl: '{{API_BASE_URL}}',
  authOrigin: '{{AUTH_ORIGIN}}',
})
