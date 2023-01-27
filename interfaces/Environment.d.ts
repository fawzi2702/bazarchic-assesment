/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    readonly NEXT_PUBLIC_POST_API_ENDPOINT: string
    readonly NEXT_PUBLIC_DEFAULT_PAGE_SIZE: string
  }
}
