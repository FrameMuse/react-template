export { }
// export function mapUser(schema: APISchemas.User): User {
//   const avatar = mapUserAvatar(schema.avatar)

//   return {
//     id: schema.id,

//     avatar,
//     firstName: schema.first_name,
//     lastName: schema.last_name,
//     userName: schema.display_name ?? "",

//     email: schema.email,
//     level: schema.rank,

//     createdAt: new Date(schema.date_of_creation),

//     pricingPlan: schema.current_plan ? mapPurchase(schema.current_plan) : undefined,
//     type: userType.forward(schema.role),
//     signed: true,
//   }
// }
