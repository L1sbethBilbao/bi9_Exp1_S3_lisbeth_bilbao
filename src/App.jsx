import InventarioProvider from './context/InventarioProvider.jsx'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

function App() {
  return (
    <InventarioProvider>
      <div className="flex min-h-screen flex-col">
        <Navigation />

        <main className="grow">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </InventarioProvider>
  )
}

export default App
