import TVWidget from "./components/TVWidget";
import OrderWidget from "./components/OrderWidget";
import DefaultTopBar from "./topbars/DefaultTopBar";

function TradeEngineComponent() {
  return (
    <>
      <DefaultTopBar />
      <TVWidget />
      <OrderWidget />
    </>
  );
}

export default TradeEngineComponent;
