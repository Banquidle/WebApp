import { promises as fs } from 'fs'
import path from 'path'
import { CONFIG } from '../config.js'

export async function getLatestPatchNote() {
    try {
        try {
            await fs.access(CONFIG.PATCH_NOTES_DIR)
        } catch {
            return "Patch notes directory not found."
        }

        const files = await fs.readdir(CONFIG.PATCH_NOTES_DIR)
        const mdFiles = files.filter(file => file.endsWith('.md'))

        if (mdFiles.length === 0) {
            return "No patch notes found."
        }

        const fileStats = await Promise.all(
            mdFiles.map(async (file) => {
                const filePath = path.join(CONFIG.PATCH_NOTES_DIR, file)
                const stats = await fs.stat(filePath)
                return { file, mtime: stats.mtime, path: filePath }
            })
        )

        fileStats.sort((a, b) => b.mtime - a.mtime)
        
        const latestFile = fileStats[0]
        const content = await fs.readFile(latestFile.path, 'utf-8')

        return content
    } catch (error) {
        console.error('Error reading patch notes:', error)
        return "An error occurred while fetching patch notes."
    }
}