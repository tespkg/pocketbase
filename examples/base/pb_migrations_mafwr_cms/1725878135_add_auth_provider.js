/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const settings = dao.findSettings()
  settings.oidc2Auth = {
    enabled: true,
    clientId: "mafwr",
    clientSecret: "eXhEJBBfEudTZD6fb1tYTgQXp2phcxFW",
    authUrl: "https://sso.dev.meeraspace.com/auth",
    tokenUrl: "https://sso.dev.meeraspace.com/token",
    userApiUrl: "https://sso.dev.meeraspace.com/userinfo",
    displayName: "OIDC",
    pkce: true
  }
  dao.saveSettings(settings)
}, (db) => {
  const dao = new Dao(db)
  const settings = dao.findSettings()

  delete settings.oidc2Auth

  dao.saveSettings(settings)
})
