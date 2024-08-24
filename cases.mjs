import { execSync } from 'node:child_process'
import { test } from 'node:test'
import { readFileSync } from 'node:fs'
import { ok } from 'node:assert'

execSync('npm exec astro build', { stdio: 'inherit' })

test('check props', () => {
  const content = readFileSync('./dist/index.html', 'utf-8').toString()

  ok(content.includes('<div id="disqus_thread" class="disqus" style="color: red;"></div>'))
})
