import { RegisterForm } from '@/components/register-form'

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=1080&width=1080"
          alt="Online education illustration"
          className="rounded-r-2xl object-cover h-full"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-orange-500">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Start your learning journey today
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

