import { Action } from "../client.types"
import {
  SchemaAccountsToken,
  SchemaAdminMailingSend,
  SchemaBaseFrontError,
  SchemaCreateMentors,
  SchemaCreatePagesFaqs,
  SchemaCreatePagesLinksSocials,
  SchemaCreateTagsCategories,
  SchemaCreateXlsx,
  SchemaEcho,
  SchemaForm,
  SchemaFormApplications,
  SchemaMailing,
  SchemaMailingsCreate,
  SchemaMailingsSubscribe,
  SchemaPagesFaq,
  SchemaPagesLinksDocument,
  SchemaPagesLinksSocial,
  SchemaPagesRetrieveMain,
  SchemaPagesRetrievePersonal,
  SchemaPagesUpdateMain,
  SchemaPagesUpdatePersonal,
  SchemaPaginatedFormsList,
  SchemaPaginatedGeoCountriesList,
  SchemaPaginatedGeoLanguagesList,
  SchemaPaginatedListAdminMentorsList,
  SchemaPaginatedListMentorsList,
  SchemaPaginatedListPagesFaqsList,
  SchemaPaginatedListPagesLinksDocumentsList,
  SchemaPaginatedListPagesLinksSocialsList,
  SchemaPaginatedListTagsCategoriesList,
  SchemaPaginatedListTagsList,
  SchemaPaginatedMailingsListList,
  SchemaPatchedForm,
  SchemaPatchedPagesFaq,
  SchemaPatchedPagesLinksDocument,
  SchemaPatchedPagesLinksSocial,
  SchemaPatchedPagesUpdateMain,
  SchemaPatchedPagesUpdatePersonal,
  SchemaPatchedTagsCategory,
  SchemaPatchedUpdateMe,
  SchemaPatchedUpdateMentor,
  SchemaPatchedUpdatePageMentor,
  SchemaPatchedUpdateTag,
  SchemaRetrieveAccountsMe,
  SchemaRetrieveMentor,
  SchemaTagsCategory,
  SchemaTagsCategoryTags,
  SchemaUpdateMe,
  SchemaUpdateMentor,
  SchemaUpdatePageMentor,
  SchemaUpdateTag,
  SchemaUpdateXlsx
} from "./schemas"

/**
 * OpenApi3 schema for this API. Format can be selected via content negotiation.
 * 
 * - YAML: application/vnd.oai.openapi
 * - JSON: application/vnd.oai.openapi+json
 */
export const get_docs_ = (format?: "json" | "yaml", lang?: "en" | "ru"): Action<object> => ({
  method: "GET",
  endpoint: `/__docs__/`,
  params: { format, lang }
})

export const getAccountMe = (): Action<SchemaRetrieveAccountsMe> => ({
  method: "GET",
  endpoint: `/account/me/`
})

export const patchAccountMe = (body: SchemaPatchedUpdateMe): Action<SchemaUpdateMe> => ({
  method: "PATCH",
  endpoint: `/account/me/`,
  body
})

export const postAccountToken = (body: SchemaAccountsToken): Action<SchemaAccountsToken> => ({
  method: "POST",
  endpoint: `/account/token/`,
  body
})

/**
 * No response body
 */
export const deleteAccountToken = (): Action => ({
  method: "DELETE",
  endpoint: `/account/token/`
})

/**
 * 
 * @param page - A page number within the paginated result set. 
 * @param page_size - Number of results to return per page. 
 */
export const getAdminMentors = (page?: number, page_size?: number): Action<SchemaPaginatedListAdminMentorsList> => ({
  method: "GET",
  endpoint: `/admin/mentors/`,
  params: { page, page_size }
})

export const getBaseEcho = (): Action<SchemaEcho> => ({
  method: "GET",
  endpoint: `/base/echo/`
})

/**
 * No response body
 */
export const postBaseEcho = (): Action => ({
  method: "POST",
  endpoint: `/base/echo/`
})

/**
 * No response body
 */
export const putBaseEcho = (): Action => ({
  method: "PUT",
  endpoint: `/base/echo/`
})

/**
 * No response body
 */
export const patchBaseEcho = (): Action => ({
  method: "PATCH",
  endpoint: `/base/echo/`
})

/**
 * No response body
 */
export const deleteBaseEcho = (): Action => ({
  method: "DELETE",
  endpoint: `/base/echo/`
})

/**
 * No response body
 */
export const postBaseFrontError = (body: SchemaBaseFrontError): Action => ({
  method: "POST",
  endpoint: `/base/front/error/`,
  body
})

/**
 * 
 * @param page - A page number within the paginated result set. 
 * @param page_size - Number of results to return per page. 
 * @param type__in - Multiple values may be separated by commas. 
 */
export const getForms = (page?: number, page_size?: number, type__in?: string[]): Action<SchemaPaginatedFormsList> => ({
  method: "GET",
  endpoint: `/forms/`,
  params: { page, page_size, type__in }
})

/**
 * No response body
 */
export const postFormsByFormIdApplications = (form_id: number, body: SchemaFormApplications): Action => ({
  method: "POST",
  endpoint: `/forms/${form_id}/applications/`,
  body
})

export const patchFormsById = (id: number, body: SchemaPatchedForm): Action<SchemaForm> => ({
  method: "PATCH",
  endpoint: `/forms/${id}/`,
  body
})

/**
 * No response body
 */
export const getFormsApplicationsXlsx = (): Action => ({
  method: "GET",
  endpoint: `/forms/applications/xlsx/`
})

export const postFormsApplicationsXlsx = (body: SchemaCreateXlsx): Action<SchemaCreateXlsx> => ({
  method: "POST",
  endpoint: `/forms/applications/xlsx/`,
  body
})

/**
 * No response body
 */
export const putFormsApplicationsXlsx = (body: SchemaUpdateXlsx): Action => ({
  method: "PUT",
  endpoint: `/forms/applications/xlsx/`,
  body
})

/**
 * 
 * @param page - A page number within the paginated result set. 
 * @param page_size - Number of results to return per page. 
 */
export const getGeoCountries = (page?: number, page_size?: number): Action<SchemaPaginatedGeoCountriesList> => ({
  method: "GET",
  endpoint: `/geo/countries/`,
  params: { page, page_size }
})

/**
 * 
 * @param page - A page number within the paginated result set. 
 * @param page_size - Number of results to return per page. 
 */
export const getGeoLanguages = (page?: number, page_size?: number): Action<SchemaPaginatedGeoLanguagesList> => ({
  method: "GET",
  endpoint: `/geo/languages/`,
  params: { page, page_size }
})

/**
 * 
 * @param page - A page number within the paginated result set. 
 * @param page_size - Number of results to return per page. 
 */
export const getMailings = (page?: number, page_size?: number): Action<SchemaPaginatedMailingsListList> => ({
  method: "GET",
  endpoint: `/mailings/`,
  params: { page, page_size }
})

export const postMailings = (body: SchemaMailingsCreate): Action<SchemaMailingsCreate> => ({
  method: "POST",
  endpoint: `/mailings/`,
  body
})

export const getMailingsById = (id: number): Action<SchemaMailing> => ({
  method: "GET",
  endpoint: `/mailings/${id}/`
})

export const postMailingsByIdSend = (id: number, body: SchemaAdminMailingSend): Action<SchemaAdminMailingSend> => ({
  method: "POST",
  endpoint: `/mailings/${id}/send/`,
  body
})

/**
 * No response body
 */
export const postMailingsSubscribe = (body: SchemaMailingsSubscribe): Action => ({
  method: "POST",
  endpoint: `/mailings/subscribe/`,
  body
})

/**
 * No response body
 */
export const getMailingsSubscribersXlsx = (): Action => ({
  method: "GET",
  endpoint: `/mailings/subscribers/xlsx/`
})

export const postMailingsSubscribersXlsx = (body: SchemaCreateXlsx): Action<SchemaCreateXlsx> => ({
  method: "POST",
  endpoint: `/mailings/subscribers/xlsx/`,
  body
})

/**
 * No response body
 */
export const putMailingsSubscribersXlsx = (body: SchemaUpdateXlsx): Action => ({
  method: "PUT",
  endpoint: `/mailings/subscribers/xlsx/`,
  body
})

export const getMailingsUnsubscribeByUuid = (uuid: string): Action => ({
  method: "GET",
  endpoint: `/mailings/unsubscribe/${uuid}/`
})

/**
 * 
 * @param page - A page number within the paginated result set. 
 * @param page_size - Number of results to return per page. 
 * @param tag_set__in - Tag set в 
 */
export const getMentors = (page?: number, page_size?: number, tag_set__in?: string): Action<SchemaPaginatedListMentorsList> => ({
  method: "GET",
  endpoint: `/mentors/`,
  params: { page, page_size, tag_set__in }
})

export const postMentors = (body: SchemaCreateMentors): Action<SchemaCreateMentors> => ({
  method: "POST",
  endpoint: `/mentors/`,
  body
})

export const getMentorsById = (id: number): Action<SchemaRetrieveMentor> => ({
  method: "GET",
  endpoint: `/mentors/${id}/`
})

export const patchMentorsById = (id: number, body: SchemaPatchedUpdateMentor): Action<SchemaUpdateMentor> => ({
  method: "PATCH",
  endpoint: `/mentors/${id}/`,
  body
})

/**
 * No response body
 */
export const deleteMentorsById = (id: number): Action => ({
  method: "DELETE",
  endpoint: `/mentors/${id}/`
})

/**
 * 
 * @param page - A page number within the paginated result set. 
 * @param page_size - Number of results to return per page. 
 */
export const getPagesFaqs = (page?: number, page_size?: number): Action<SchemaPaginatedListPagesFaqsList> => ({
  method: "GET",
  endpoint: `/pages/faqs/`,
  params: { page, page_size }
})

export const postPagesFaqs = (body: SchemaCreatePagesFaqs): Action<SchemaCreatePagesFaqs> => ({
  method: "POST",
  endpoint: `/pages/faqs/`,
  body
})

export const patchPagesFaqsById = (id: number, body: SchemaPatchedPagesFaq): Action<SchemaPagesFaq> => ({
  method: "PATCH",
  endpoint: `/pages/faqs/${id}/`,
  body
})

/**
 * No response body
 */
export const deletePagesFaqsById = (id: number): Action => ({
  method: "DELETE",
  endpoint: `/pages/faqs/${id}/`
})

/**
 * 
 * @param page - A page number within the paginated result set. 
 * @param page_size - Number of results to return per page. 
 */
export const getPagesLinksDocuments = (page?: number, page_size?: number): Action<SchemaPaginatedListPagesLinksDocumentsList> => ({
  method: "GET",
  endpoint: `/pages/links/documents/`,
  params: { page, page_size }
})

export const patchPagesLinksDocumentsById = (id: number, body: SchemaPatchedPagesLinksDocument): Action<SchemaPagesLinksDocument> => ({
  method: "PATCH",
  endpoint: `/pages/links/documents/${id}/`,
  body
})

/**
 * 
 * @param page - A page number within the paginated result set. 
 * @param page_size - Number of results to return per page. 
 */
export const getPagesLinksSocials = (page?: number, page_size?: number): Action<SchemaPaginatedListPagesLinksSocialsList> => ({
  method: "GET",
  endpoint: `/pages/links/socials/`,
  params: { page, page_size }
})

export const postPagesLinksSocials = (body: SchemaCreatePagesLinksSocials): Action<SchemaCreatePagesLinksSocials> => ({
  method: "POST",
  endpoint: `/pages/links/socials/`,
  body
})

export const patchPagesLinksSocialsById = (id: number, body: SchemaPatchedPagesLinksSocial): Action<SchemaPagesLinksSocial> => ({
  method: "PATCH",
  endpoint: `/pages/links/socials/${id}/`,
  body
})

/**
 * No response body
 */
export const deletePagesLinksSocialsById = (id: number): Action => ({
  method: "DELETE",
  endpoint: `/pages/links/socials/${id}/`
})

export const getPagesMain = (): Action<SchemaPagesRetrieveMain> => ({
  method: "GET",
  endpoint: `/pages/main/`
})

export const patchPagesMain = (body: SchemaPatchedPagesUpdateMain): Action<SchemaPagesUpdateMain> => ({
  method: "PATCH",
  endpoint: `/pages/main/`,
  body
})

export const patchPagesMainMentorsByMentorId = (mentor_id: number, body: SchemaPatchedUpdatePageMentor): Action<SchemaUpdatePageMentor> => ({
  method: "PATCH",
  endpoint: `/pages/main/mentors/${mentor_id}/`,
  body
})

/**
 * No response body
 */
export const deletePagesMainMentorsByMentorId = (mentor_id: number): Action => ({
  method: "DELETE",
  endpoint: `/pages/main/mentors/${mentor_id}/`
})

export const getPagesPersonalByShortcut = (shortcut: string): Action<SchemaPagesRetrievePersonal> => ({
  method: "GET",
  endpoint: `/pages/personal/${shortcut}/`
})

export const patchPagesPersonalByShortcut = (shortcut: string, body: SchemaPatchedPagesUpdatePersonal): Action<SchemaPagesUpdatePersonal> => ({
  method: "PATCH",
  endpoint: `/pages/personal/${shortcut}/`,
  body
})

export const patchPagesPersonalByShortcutMentorsByMentorId = (mentor_id: number, shortcut: string, body: SchemaPatchedUpdatePageMentor): Action<SchemaUpdatePageMentor> => ({
  method: "PATCH",
  endpoint: `/pages/personal/${shortcut}/mentors/${mentor_id}/`,
  body
})

/**
 * No response body
 */
export const deletePagesPersonalByShortcutMentorsByMentorId = (mentor_id: number, shortcut: string): Action => ({
  method: "DELETE",
  endpoint: `/pages/personal/${shortcut}/mentors/${mentor_id}/`
})

/**
 * 
 * @param page - A page number within the paginated result set. 
 * @param page_size - Number of results to return per page. 
 */
export const getTags = (page?: number, page_size?: number): Action<SchemaPaginatedListTagsList> => ({
  method: "GET",
  endpoint: `/tags/`,
  params: { page, page_size }
})

export const patchTagsById = (id: number, body: SchemaPatchedUpdateTag): Action<SchemaUpdateTag> => ({
  method: "PATCH",
  endpoint: `/tags/${id}/`,
  body
})

/**
 * No response body
 */
export const deleteTagsById = (id: number): Action => ({
  method: "DELETE",
  endpoint: `/tags/${id}/`
})

/**
 * 
 * @param page - A page number within the paginated result set. 
 * @param page_size - Number of results to return per page. 
 */
export const getTagsCategories = (page?: number, page_size?: number): Action<SchemaPaginatedListTagsCategoriesList> => ({
  method: "GET",
  endpoint: `/tags/categories/`,
  params: { page, page_size }
})

export const postTagsCategories = (body: SchemaCreateTagsCategories): Action<SchemaCreateTagsCategories> => ({
  method: "POST",
  endpoint: `/tags/categories/`,
  body
})

export const postTagsCategoriesByCategoryIdTags = (category_id: number, body: SchemaTagsCategoryTags): Action<SchemaTagsCategoryTags> => ({
  method: "POST",
  endpoint: `/tags/categories/${category_id}/tags/`,
  body
})

export const patchTagsCategoriesById = (id: number, body: SchemaPatchedTagsCategory): Action<SchemaTagsCategory> => ({
  method: "PATCH",
  endpoint: `/tags/categories/${id}/`,
  body
})

/**
 * No response body
 */
export const deleteTagsCategoriesById = (id: number): Action => ({
  method: "DELETE",
  endpoint: `/tags/categories/${id}/`
})
