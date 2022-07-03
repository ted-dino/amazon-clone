import styles from "./header.module.scss";
import amazonLogo from "../assets/amazon.png";

const Header = () => {
  return (
    <header className={`${styles.header} d-flex align-center`}>
      <div className={`${styles.header__logo}`}>
        <img src={amazonLogo} alt="/" />
      </div>
      <div className={`${styles.header__location} d-flex align-center`}>
        <div className="icon">
          <svg
            width="12"
            height="15"
            viewBox="0 0 12 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group">
              <path
                id="Vector"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.826172 6.42753C0.835777 3.60048 3.13535 1.31648 5.9624 1.32606C8.78946 1.33569 11.0735 3.63526 11.0639 6.46232V6.52029C11.0291 8.35797 10.003 10.0565 8.74501 11.3841C8.02558 12.1311 7.22218 12.7925 6.35081 13.3551C6.11781 13.5566 5.77221 13.5566 5.53922 13.3551C4.24022 12.5096 3.10013 11.4421 2.1711 10.2014C1.34307 9.11959 0.872949 7.80649 0.826172 6.44493V6.42753Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M5.94487 8.16666C6.85098 8.16666 7.58553 7.43211 7.58553 6.526C7.58553 5.61988 6.85098 4.88533 5.94487 4.88533C5.03875 4.88533 4.3042 5.61988 4.3042 6.526C4.3042 7.43211 5.03875 8.16666 5.94487 8.16666Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
        <div>
          <span className="d-block fs-12">Deliver to</span>
          <span className="fs-14">Philippines</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
