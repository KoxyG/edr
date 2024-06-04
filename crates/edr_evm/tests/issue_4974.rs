#![cfg(feature = "test-remote")]

use std::sync::Arc;

use edr_defaults::CACHE_DIR;
use edr_eth::{HashMap, SpecId};
use edr_evm::{blockchain::ForkedBlockchain, state::IrregularState, RandomHashGenerator};
use edr_rpc_eth::{client::EthRpcClient, spec::EthRpcSpec};
use parking_lot::Mutex;
use tokio::runtime;

#[tokio::test(flavor = "multi_thread")]
async fn issue_4974() -> anyhow::Result<()> {
    const FORK_BLOCK_NUMBER: u64 = 12_508_443;

    let url = "https://coston-api.flare.network/ext/bc/C/rpc";
    let rpc_client = EthRpcClient::<EthRpcSpec>::new(url, CACHE_DIR.into(), None)?;
    let mut irregular_state = IrregularState::default();
    let state_root_generator = Arc::new(Mutex::new(RandomHashGenerator::with_seed("test")));
    let hardfork_activation_overrides = HashMap::new();

    let _blockchain = ForkedBlockchain::new(
        runtime::Handle::current(),
        None,
        SpecId::LATEST,
        Arc::new(rpc_client),
        Some(FORK_BLOCK_NUMBER),
        &mut irregular_state,
        state_root_generator,
        &hardfork_activation_overrides,
    )
    .await?;

    Ok(())
}
