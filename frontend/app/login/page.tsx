import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>

          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}
