/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

/* auto-generated by NAPI-RS */

const { existsSync, readFileSync } = require('fs')
const { join } = require('path')

const { platform, arch } = process

let nativeBinding = null
let localFileExisted = false
let loadError = null

function isMusl() {
  // For Node 10
  if (!process.report || typeof process.report.getReport !== 'function') {
    try {
      const lddPath = require('child_process').execSync('which ldd').toString().trim()
      return readFileSync(lddPath, 'utf8').includes('musl')
    } catch (e) {
      return true
    }
  } else {
    const { glibcVersionRuntime } = process.report.getReport().header
    return !glibcVersionRuntime
  }
}

switch (platform) {
  case 'android':
    switch (arch) {
      case 'arm64':
        localFileExisted = existsSync(join(__dirname, 'edr.android-arm64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./edr.android-arm64.node')
          } else {
            nativeBinding = require('@nomicfoundation/edr-android-arm64')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm':
        localFileExisted = existsSync(join(__dirname, 'edr.android-arm-eabi.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./edr.android-arm-eabi.node')
          } else {
            nativeBinding = require('@nomicfoundation/edr-android-arm-eabi')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Android ${arch}`)
    }
    break
  case 'win32':
    switch (arch) {
      case 'x64':
        localFileExisted = existsSync(
          join(__dirname, 'edr.win32-x64-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./edr.win32-x64-msvc.node')
          } else {
            nativeBinding = require('@nomicfoundation/edr-win32-x64-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'ia32':
        localFileExisted = existsSync(
          join(__dirname, 'edr.win32-ia32-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./edr.win32-ia32-msvc.node')
          } else {
            nativeBinding = require('@nomicfoundation/edr-win32-ia32-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm64':
        localFileExisted = existsSync(
          join(__dirname, 'edr.win32-arm64-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./edr.win32-arm64-msvc.node')
          } else {
            nativeBinding = require('@nomicfoundation/edr-win32-arm64-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Windows: ${arch}`)
    }
    break
  case 'darwin':
    localFileExisted = existsSync(join(__dirname, 'edr.darwin-universal.node'))
    try {
      if (localFileExisted) {
        nativeBinding = require('./edr.darwin-universal.node')
      } else {
        nativeBinding = require('@nomicfoundation/edr-darwin-universal')
      }
      break
    } catch {}
    switch (arch) {
      case 'x64':
        localFileExisted = existsSync(join(__dirname, 'edr.darwin-x64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./edr.darwin-x64.node')
          } else {
            nativeBinding = require('@nomicfoundation/edr-darwin-x64')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm64':
        localFileExisted = existsSync(
          join(__dirname, 'edr.darwin-arm64.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./edr.darwin-arm64.node')
          } else {
            nativeBinding = require('@nomicfoundation/edr-darwin-arm64')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on macOS: ${arch}`)
    }
    break
  case 'freebsd':
    if (arch !== 'x64') {
      throw new Error(`Unsupported architecture on FreeBSD: ${arch}`)
    }
    localFileExisted = existsSync(join(__dirname, 'edr.freebsd-x64.node'))
    try {
      if (localFileExisted) {
        nativeBinding = require('./edr.freebsd-x64.node')
      } else {
        nativeBinding = require('@nomicfoundation/edr-freebsd-x64')
      }
    } catch (e) {
      loadError = e
    }
    break
  case 'linux':
    switch (arch) {
      case 'x64':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'edr.linux-x64-musl.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./edr.linux-x64-musl.node')
            } else {
              nativeBinding = require('@nomicfoundation/edr-linux-x64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'edr.linux-x64-gnu.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./edr.linux-x64-gnu.node')
            } else {
              nativeBinding = require('@nomicfoundation/edr-linux-x64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'arm64':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'edr.linux-arm64-musl.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./edr.linux-arm64-musl.node')
            } else {
              nativeBinding = require('@nomicfoundation/edr-linux-arm64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'edr.linux-arm64-gnu.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./edr.linux-arm64-gnu.node')
            } else {
              nativeBinding = require('@nomicfoundation/edr-linux-arm64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'arm':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'edr.linux-arm-musleabihf.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./edr.linux-arm-musleabihf.node')
            } else {
              nativeBinding = require('@nomicfoundation/edr-linux-arm-musleabihf')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'edr.linux-arm-gnueabihf.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./edr.linux-arm-gnueabihf.node')
            } else {
              nativeBinding = require('@nomicfoundation/edr-linux-arm-gnueabihf')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'riscv64':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'edr.linux-riscv64-musl.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./edr.linux-riscv64-musl.node')
            } else {
              nativeBinding = require('@nomicfoundation/edr-linux-riscv64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'edr.linux-riscv64-gnu.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./edr.linux-riscv64-gnu.node')
            } else {
              nativeBinding = require('@nomicfoundation/edr-linux-riscv64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 's390x':
        localFileExisted = existsSync(
          join(__dirname, 'edr.linux-s390x-gnu.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./edr.linux-s390x-gnu.node')
          } else {
            nativeBinding = require('@nomicfoundation/edr-linux-s390x-gnu')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Linux: ${arch}`)
    }
    break
  default:
    throw new Error(`Unsupported OS: ${platform}, architecture: ${arch}`)
}

if (!nativeBinding) {
  if (loadError) {
    throw loadError
  }
  throw new Error(`Failed to load native binding`)
}

const { SpecId, EdrContext, MineOrdering, Provider, Response, SuccessReason, ExceptionalHalt, createModelsAndDecodeBytecodes, linkHexStringBytecode, BytecodeWrapper, ContractFunctionType, printMessageTrace, printStackTrace, Exit, ExitCode, ReturnData, StackTraceEntryType, stackTraceEntryTypeToString, FALLBACK_FUNCTION_NAME, RECEIVE_FUNCTION_NAME, CONSTRUCTOR_FUNCTION_NAME, UNRECOGNIZED_FUNCTION_NAME, UNKNOWN_FUNCTION_NAME, PRECOMPILE_FUNCTION_NAME, UNRECOGNIZED_CONTRACT_NAME, SolidityTracer, VmTraceDecoder, initializeVmTraceDecoder, VmTracer, RawTrace } = nativeBinding

module.exports.SpecId = SpecId
module.exports.EdrContext = EdrContext
module.exports.MineOrdering = MineOrdering
module.exports.Provider = Provider
module.exports.Response = Response
module.exports.SuccessReason = SuccessReason
module.exports.ExceptionalHalt = ExceptionalHalt
module.exports.createModelsAndDecodeBytecodes = createModelsAndDecodeBytecodes
module.exports.linkHexStringBytecode = linkHexStringBytecode
module.exports.BytecodeWrapper = BytecodeWrapper
module.exports.ContractFunctionType = ContractFunctionType
module.exports.printMessageTrace = printMessageTrace
module.exports.printStackTrace = printStackTrace
module.exports.Exit = Exit
module.exports.ExitCode = ExitCode
module.exports.ReturnData = ReturnData
module.exports.StackTraceEntryType = StackTraceEntryType
module.exports.stackTraceEntryTypeToString = stackTraceEntryTypeToString
module.exports.FALLBACK_FUNCTION_NAME = FALLBACK_FUNCTION_NAME
module.exports.RECEIVE_FUNCTION_NAME = RECEIVE_FUNCTION_NAME
module.exports.CONSTRUCTOR_FUNCTION_NAME = CONSTRUCTOR_FUNCTION_NAME
module.exports.UNRECOGNIZED_FUNCTION_NAME = UNRECOGNIZED_FUNCTION_NAME
module.exports.UNKNOWN_FUNCTION_NAME = UNKNOWN_FUNCTION_NAME
module.exports.PRECOMPILE_FUNCTION_NAME = PRECOMPILE_FUNCTION_NAME
module.exports.UNRECOGNIZED_CONTRACT_NAME = UNRECOGNIZED_CONTRACT_NAME
module.exports.SolidityTracer = SolidityTracer
module.exports.VmTraceDecoder = VmTraceDecoder
module.exports.initializeVmTraceDecoder = initializeVmTraceDecoder
module.exports.VmTracer = VmTracer
module.exports.RawTrace = RawTrace
