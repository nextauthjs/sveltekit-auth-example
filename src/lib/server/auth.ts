import { SvelteKitAuth } from "@auth/sveltekit"
import Apple from "@auth/sveltekit/providers/apple"
import Auth0 from "@auth/sveltekit/providers/auth0"
import AzureB2C from "@auth/sveltekit/providers/azure-ad-b2c"
import BoxyHQSAML from "@auth/sveltekit/providers/boxyhq-saml"
import Cognito from "@auth/sveltekit/providers/cognito"
import Coinbase from "@auth/sveltekit/providers/coinbase"
import Discord from "@auth/sveltekit/providers/discord"
import Dropbox from "@auth/sveltekit/providers/dropbox"
import Facebook from "@auth/sveltekit/providers/facebook"
import GitHub from "@auth/sveltekit/providers/github"
import GitLab from "@auth/sveltekit/providers/gitlab"
import Google from "@auth/sveltekit/providers/google"
import Hubspot from "@auth/sveltekit/providers/hubspot"
import Keycloak from "@auth/sveltekit/providers/keycloak"
import LinkedIn from "@auth/sveltekit/providers/linkedin"
import MicrosoftEntraID from "@auth/sveltekit/providers/microsoft-entra-id"
import Resend from "@auth/sveltekit/providers/resend"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "$lib/db/schema"
import type { Provider } from "@auth/sveltekit/providers"

export const { handle, signIn, signOut } = SvelteKitAuth({
  trustHost: true,
  adapter: DrizzleAdapter(db),
  secret: process.env.SECRET,
  callbacks: {
    async session({ session, user }) {
      return session
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers : [
    Google,
    Discord,
    LinkedIn,
    Facebook,
    MicrosoftEntraID,
    Resend({
      from: "support@qwksearch.com",
    }),
  ],
  pages: {
    signIn: "/signin",
  },
})

