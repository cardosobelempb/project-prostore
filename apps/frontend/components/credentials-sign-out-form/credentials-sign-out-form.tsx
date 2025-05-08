'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const CredentialsSignUpForm = () => {
  return (
    <form>
      <div className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            required
            type="text"
            // defaultValue={signInDefaultValues.name}
            autoComplete="name"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            required
            type="email"
            // defaultValue={signInDefaultValues.email}
            autoComplete="email"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            required
            type="password"
            // defaultValue={signInDefaultValues.password}
            autoComplete="current-password"
          />
        </div>
        <div>
          <Button className="w-full" variant="default">
            Sign Out with credentials
          </Button>
        </div>

        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?
          <Link target="_self" className="link" href="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
    </form>
  )
}

export default CredentialsSignUpForm
