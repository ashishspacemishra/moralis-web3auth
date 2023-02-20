import {createRequire} from 'module';
const require = createRequire(import.meta.url);
import { useEvmNativeBalance } from '@moralisweb3/next';

function HomePage() {
    const address = '0x14f3e34E232a234031A502C16E8873000A283C70';
    const { data: nativeBalance } = useEvmNativeBalance({ address });
    return (
        <div>
            <h3>Wallet: {address}</h3>
            <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
        </div>
    );
}

export default HomePage;

