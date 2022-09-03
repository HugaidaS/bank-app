import { clients } from "../constants";
import styles from "../styles";

const Clients = () => (
  <section className={`${styles.flexCenter} sm:my-4 sm:mb-0 my-0 mb-20`}>
    <div
      className={`${styles.flexCenter} sm:flex-row flex-col flex-wrap w-full`}
    >
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-w-[120px] sm:my-0 my-6`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
