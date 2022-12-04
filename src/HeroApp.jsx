import { AuthProvider } from "./Auth"
import { AppRouter } from "./router/AppRouter"

export const HeroApp = () => {
  return (
    <AuthProvider>
        <AppRouter/>
    </AuthProvider>
  )
}
