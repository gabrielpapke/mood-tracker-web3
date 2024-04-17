import { ethers } from 'ethers'

export const provider = new ethers.BrowserProvider(window.ethereum)
