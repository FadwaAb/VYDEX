import { guarantees } from "../data/steps";
import "../css/HowItWorks.css";

export default function Guarantees() {
  return (
    <section className="guarantees">
      <div className="guarantees__list">
        {guarantees.map((item) => {
          const Icon = item.icon;
          return (
            <div className="guarantee" key={item.title}>
              <span className="guarantee__icon">
                <Icon size={26} strokeWidth={1.8} />
              </span>
              <div className="guarantee__text">
                <strong>{item.title}</strong>
                <span>{item.sub}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}