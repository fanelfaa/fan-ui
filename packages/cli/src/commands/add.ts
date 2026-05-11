import fs from 'fs-extra'
import path from 'path'

const COMPONENTS = ['button', 'input', 'dialog', 'select', 'toast']

export async function addComponent(componentName: string, outputDir: string, framework: string = 'solid') {
  const component = componentName.toLowerCase()
  const fw = framework.toLowerCase()
  
  if (!COMPONENTS.includes(component)) {
    console.error(`Unknown component: ${componentName}`)
    console.log(`Available components: ${COMPONENTS.join(', ')}`)
    process.exit(1)
  }
  
  const sourceBase = fw === 'react' ? 'packages/react/src' : 'packages/solid/src'
  const themeSource = 'packages/core/src/theme.css'
  const sourceDir = path.join(process.cwd(), sourceBase)
  const targetDir = path.resolve(outputDir)
  
  const sourceFile = path.join(sourceDir, `${component}.tsx`)
  const targetFile = path.join(targetDir, `${component}.tsx`)

  await fs.ensureDir(targetDir)
  await fs.copy(sourceFile, targetFile)

  const themeSourcePath = path.join(process.cwd(), themeSource)
  const themeTarget = path.join(targetDir, 'theme.css')
  if (!await fs.pathExists(themeTarget)) {
    await fs.copy(themeSourcePath, themeTarget)
  }

  console.log(`✓ Copied ${component} to ${targetFile}`)
}