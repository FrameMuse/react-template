
export interface SchemaAccountsToken {
  email: string
  password: string
  token: string
}

export interface SchemaAdminMailingSend {
  id: number
}

export interface SchemaBaseFrontError {
  subject: string
  body: string
}

export interface SchemaCreateMentors {
  id: number
  info: SchemaMentorsCreateInfo
  avatar: string
  company?: string | null
  profession?: string | null
  first_name: string
  last_name: string
  price: string
  price_currency: SchemaPriceCurrencyEnum
  tag_set: number[]
  country: number
  packages: SchemaCreateMentorsPackages[]
}

export interface SchemaCreatePagesFaqs {
  id: number
  question: string
  answer: string
}

export interface SchemaCreatePagesLinksSocials {
  id: number
  icon: string
  url: string
}

export interface SchemaCreateTagsCategories {
  id: number
  shortcut: string
  title_ru?: string | null
  title_en?: string | null
  icon: string
}

export interface SchemaCreateXlsx {
  link: string
}

export interface SchemaEMAILNOTFOUND {
  error: object
}

export interface SchemaEcho {
  GET: object
  POST: object
  data: string
  query_params: object
  user: string
  auth: string
  args: string[]
  kwargs: object
  queries: number
  uri: string
}

export interface SchemaForm {
  id: number
  description?: string
  post_send: string
  fields: SchemaFormsFields[]
}

export interface SchemaFormApplications {
  url: string
  name: string
  email: string
  telegram: string
  facebook: string
  whats_app: string
  viber: string
  about: string
}

export interface SchemaForms {
  id: number
  type: SchemaFormsTypeEnum
  description?: string
  post_send: string
  fields: SchemaFormsFields[]
}

export type SchemaFormsTypeEnum = "become_mentor" | "choose_mentor" | "test_meeting" | "still_questions"

export interface SchemaGeoCountries {
  id: number
  code: string
  flag_unicode: string
  name: string
}

export interface SchemaGeoLanguages {
  id: number
  code: string
  name: string
  name_native: string
}

export interface SchemaINVALIDPASSWORD {
  error: object
}

export interface SchemaINVALIDTOKEN {
  error: object
}

export interface SchemaListAdminMentors {
  id: number
  info: SchemaListAdminMentorsInfo
  avatar: string
  company?: string | null
  profession?: string | null
  first_name: string
  last_name: string
  price: string
  price_currency: string
  country: SchemaListAdminMentorsCountry
}

export interface SchemaListMentors {
  id: number
  avatar: string
  company?: string | null
  profession?: string | null
  first_name: string
  last_name: string
  price: string
  price_currency: string
  country: SchemaMentorsCountry
  tags: SchemaMentorsTags[]
}

export interface SchemaListPagesFaqs {
  id: number
  question: string
  answer: string
}

export interface SchemaListPagesLinksDocuments {
  id: number
  type: SchemaListPagesLinksDocumentsTypeEnum
  url: string
}

export type SchemaListPagesLinksDocumentsTypeEnum = "facebook" | "instagram" | "help" | "user_agreement" | "privacy_policy" | "cookie_policy"

export interface SchemaListPagesLinksSocials {
  id: number
  icon: string
  url: string
}

export interface SchemaListTags {
  id: number
  shortcut: string
  title: string
}

export interface SchemaListTagsCategories {
  id: number
  shortcut: string
  title: string
  icon: string
  tags: SchemaListTags[]
}

export interface SchemaMAXPAGEMENTORINDEX {
  error: object
}

export interface SchemaMailing {
  id: number
  subject: string
  content: string
  is_running: boolean
}

export interface SchemaMailingsCreate {
  id: number
  subject: string
  content: string
}

export interface SchemaMailingsList {
  id: number
  subject: string
  is_running: boolean
}

export interface SchemaMailingsSubscribe {
  email: string
}

export interface SchemaNOTVERIFIED {
  error: object
}

export interface SchemaPagesFaq {
  id: number
  question: string
  answer: string
}

export interface SchemaPagesLinksDocument {
  id: number
  url: string
}

export interface SchemaPagesLinksSocial {
  id: number
  icon: string
  url: string
}

export interface SchemaPagesRetrieveMain {
  id: number
  tags: SchemaListTags[]
  mentors: SchemaListMentors[]
}

export interface SchemaPagesRetrievePersonal {
  id: number
  title: string | null
  tags: SchemaListTags[]
  mentors: SchemaListMentors[]
}

export interface SchemaPagesUpdateMain {
  id: number
  tags: number[]
  mentors: number[]
}

export interface SchemaPagesUpdatePersonal {
  id: number
  tags: number[]
  mentors: number[]
}

export interface SchemaPaginatedFormsList {
  count: number
  results: SchemaForms[]
}

export interface SchemaPaginatedGeoCountriesList {
  count: number
  results: SchemaGeoCountries[]
}

export interface SchemaPaginatedGeoLanguagesList {
  count: number
  results: SchemaGeoLanguages[]
}

export interface SchemaPaginatedListAdminMentorsList {
  count: number
  results: SchemaListAdminMentors[]
}

export interface SchemaPaginatedListMentorsList {
  count: number
  results: SchemaListMentors[]
}

export interface SchemaPaginatedListPagesFaqsList {
  count: number
  results: SchemaListPagesFaqs[]
}

export interface SchemaPaginatedListPagesLinksDocumentsList {
  count: number
  results: SchemaListPagesLinksDocuments[]
}

export interface SchemaPaginatedListPagesLinksSocialsList {
  count: number
  results: SchemaListPagesLinksSocials[]
}

export interface SchemaPaginatedListTagsCategoriesList {
  count: number
  results: SchemaListTagsCategories[]
}

export interface SchemaPaginatedListTagsList {
  count: number
  results: SchemaListTags[]
}

export interface SchemaPaginatedMailingsListList {
  count: number
  results: SchemaMailingsList[]
}

export interface SchemaPatchedForm {
  id: number
  description: string
  post_send: string
  fields: SchemaFormsFields[]
}

export interface SchemaPatchedPagesFaq {
  id: number
  question: string
  answer: string
}

export interface SchemaPatchedPagesLinksDocument {
  id: number
  url: string
}

export interface SchemaPatchedPagesLinksSocial {
  id: number
  icon: string
  url: string
}

export interface SchemaPatchedPagesUpdateMain {
  id: number
  tags: number[]
  mentors: number[]
}

export interface SchemaPatchedPagesUpdatePersonal {
  id: number
  tags: number[]
  mentors: number[]
}

export interface SchemaPatchedTagsCategory {
  id: number
  shortcut: string
  title: string
  icon: string
}

export interface SchemaPatchedUpdateMe {
  first_name: string
  last_name: string
}

export interface SchemaPatchedUpdateMentor {
  id: number
  info: SchemaUpdateMentorInfo
  avatar: string
  company: string | null
  profession: string | null
  first_name: string
  last_name: string
  price: string
  price_currency: SchemaPriceCurrencyEnum
  tag_set: number[]
  country: number
  packages: SchemaUpdateMentorPackages[]
}

export interface SchemaPatchedUpdatePageMentor {
  id: number
}

export interface SchemaPatchedUpdateTag {
  id: number
  shortcut: string
  title: string
}

export type SchemaPriceCurrencyEnum = "USD" | "EUR" | "RUB"

export interface SchemaRetrieveAccountsMe {
  email: string
  first_name?: string
  last_name?: string
  type?: SchemaRetrieveAccountsMeTypeEnum
}

export type SchemaRetrieveAccountsMeTypeEnum = number

export interface SchemaRetrieveMentor {
  id: number
  avatar: string
  company?: string | null
  profession?: string | null
  first_name: string
  last_name: string
  price: string
  price_currency: string
  country: SchemaRetrieveMentorCountry
  tags: SchemaListTags[]
  packages: SchemaRetrieveMentorPackages[]
  info: SchemaRetrieveMentorInfo
}

export interface SchemaTagsCategory {
  id: number
  shortcut: string
  title: string
  icon: string
}

export interface SchemaTagsCategoryTags {
  id: number
  shortcut: string
  title_ru?: string | null
  title_en?: string | null
}

export interface SchemaUpdateMe {
  first_name: string
  last_name: string
}

export interface SchemaUpdateMentor {
  id: number
  info: SchemaUpdateMentorInfo
  avatar: string
  company?: string | null
  profession?: string | null
  first_name: string
  last_name: string
  price: string
  price_currency: SchemaPriceCurrencyEnum
  tag_set: number[]
  country: number
  packages: SchemaUpdateMentorPackages[]
}

export interface SchemaUpdatePageMentor {
  id: number
}

export interface SchemaUpdateTag {
  id: number
  shortcut: string
  title: string
}

export interface SchemaUpdateXlsx {
  xlsx: string
}

export interface SchemaCreateMentorsPackages {
  lessons_count: number
  discount: number
}

export interface SchemaFormsFields {
  type: SchemaFormsFieldsTypeEnum
  placeholder: string
}

export type SchemaFormsFieldsTypeEnum = "name" | "email" | "telegram" | "facebook" | "whats_app" | "viber" | "about"

export interface SchemaListAdminMentorsCountry {
  id: number
  name: string
}

export interface SchemaListAdminMentorsInfo {
  trial_meeting: number | null
  city_ru: string | null
  city_en: string | null
}

export interface SchemaMentorsCountry {
  id: number
  flag_unicode: string
}

export interface SchemaMentorsCreateInfo {
  trial_meeting?: number | null
  resume: string
  what_help: string
  experience: string
  portfolio: string
  languages: number[]
  city_ru?: string | null
  city_en?: string | null
}

export interface SchemaMentorsTags {
  id: number
  shortcut: string
  title: string
}

export interface SchemaRetrieveMentorCountry {
  id: number
  flag_unicode: string
}

export interface SchemaRetrieveMentorInfo {
  trial_meeting?: number | null
  resume: string
  what_help: string
  experience: string
  portfolio: string
  languages: SchemaRetrieveMentorInfoLanguages[]
  city_ru?: string | null
  city_en?: string | null
}

export interface SchemaRetrieveMentorInfoLanguages {
  id: number
  name_native: string
}

export interface SchemaRetrieveMentorPackages {
  id: number
  lessons_count: number
  discount: number
}

export interface SchemaUpdateMentorInfo {
  trial_meeting?: number | null
  resume: string
  what_help: string
  experience: string
  portfolio: string
  languages: number[]
  city_ru?: string | null
  city_en?: string | null
}

export interface SchemaUpdateMentorPackages {
  lessons_count: number
  discount: number
}
