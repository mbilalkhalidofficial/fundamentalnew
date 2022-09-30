import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import contactbaner from "../img/contactbaner.png";
import aboutimg from "../img/aboutimg.png";
export default function Product() {
  return (
    <>
      <Header />
      <div className="contact__main__banner">
        <div className="contact__banner__img">
          <img src={contactbaner} alt="Contact" />
          <div className="contact__overlay">
            <div className="contact__overlay__svg">
              <svg width="118" height="131" viewBox="0 0 118 131" fill="none">
                <path
                  d="M28.5732 0.149673C31.9009 0.997776 35.2113 1.89227 38.5564 2.68228C43.6407 3.84407 45.2118 6.39413 44.748 11.6338C44.4332 15.5013 44.4623 19.3892 44.835 23.2516C45.1886 27.1726 44.5915 29.473 41.2521 31.2738C35.2402 34.5151 35.7968 35.1076 38.4115 40.5273C41.2406 46.3943 45.0553 51.7851 48.5337 57.321C49.9657 59.6039 52.0122 60.0222 54.2094 58.3666C58.4068 55.2124 62.1867 55.6829 66.2681 58.9126C69.0276 61.1026 72.3611 62.6012 75.5439 64.1987C79.7355 66.3015 80.9703 68.8459 79.6021 73.4059C78.8253 75.9908 77.9672 78.5526 77.1208 81.1143C75.283 86.6851 72.0886 88.1605 66.6855 85.8834C53.4858 80.393 42.1809 71.1478 34.1677 59.2902C24.1324 44.6343 20.1786 28.3229 21.3149 10.7102C21.454 8.5319 21.6337 6.06311 22.7468 4.32044C23.8599 2.57776 26.1905 1.52627 27.9645 0.178605L28.5732 0.149673Z"
                  fill="white"
                />
                <path
                  d="M43.0717 130.85C40.9093 129.601 40.66 127.748 40.9556 125.407C41.918 117.647 42.6949 109.863 43.5703 101.666H39.3962C31.761 101.666 24.1257 101.573 16.4905 101.666C6.36822 101.823 -0.165444 93.9172 0.00268116 85.0818C0.373716 66.4061 0.0896256 47.7247 0.130208 29.0432C0.130208 20.3298 5.30732 14.4046 13.8353 13.086C14.3488 13.0503 14.864 13.0503 15.3774 13.086C15.3247 14.0689 15.3247 15.054 15.3774 16.0369C15.5919 18.0062 14.9137 18.8774 12.8324 19.3364C10.8287 19.7926 9.043 20.9267 7.77592 22.5476C6.50883 24.1684 5.8377 26.1771 5.87548 28.2357C5.82523 47.6917 5.82523 67.1477 5.87548 86.6037C5.87548 91.396 9.40029 95.2241 14.4093 95.6017C19.4182 95.9793 24.4446 95.8051 29.4826 95.8341C34.793 95.8341 40.1093 95.8341 45.4255 95.8341C49.0083 95.8341 49.7677 96.6008 49.4489 100.133C48.8691 106.377 48.2024 112.61 47.4951 119.651C48.6894 118.576 49.3851 118.007 50.0228 117.373C56.5855 110.949 63.183 104.547 69.6645 98.0414C70.3442 97.3024 71.1754 96.7195 72.101 96.3325C73.0266 95.9454 74.0248 95.7635 75.0271 95.7992C83.6228 95.8689 92.2223 95.8689 100.826 95.7992C107.899 95.7586 110.762 93.1329 112.235 86.1273C112.467 85.0236 114.131 83.6005 115.273 83.4611C116.943 83.252 117.824 84.6752 117.876 86.5573C118.108 94.6898 111.006 101.527 101.997 101.608C93.691 101.686 85.3813 101.686 77.0678 101.608C76.1696 101.557 75.2714 101.706 74.4368 102.042C73.6021 102.378 72.8516 102.894 72.2386 103.554C63.9715 111.838 55.6058 120.017 47.2517 128.213C46.3009 129.154 45.2168 129.956 44.1964 130.833L43.0717 130.85Z"
                  fill="white"
                />
                <path
                  d="M50.4106 18.7846V12.9757H59.8894C73.7047 12.9757 87.5199 13.1326 101.329 12.9293C111 12.7841 118.438 20.1729 117.968 29.6589C117.585 37.3789 117.968 45.1338 117.858 52.8945C117.632 70.269 101.179 84.8436 83.9313 82.9906C83.5196 82.8911 83.1164 82.7591 82.7255 82.5956C83.0698 81.1592 83.5233 79.7512 84.0821 78.3841C84.3077 78.0724 84.6005 77.8155 84.9387 77.6325C85.2769 77.4495 85.6519 77.345 86.0358 77.3269C89.5686 77.3448 93.0681 76.6426 96.3215 75.2627C99.5749 73.8829 102.514 71.8542 104.96 69.3003C107.407 66.7465 109.309 63.7207 110.552 60.407C111.794 57.0933 112.351 53.561 112.188 50.025C111.858 43.1704 112.136 36.2869 112.13 29.4149C112.13 22.7637 108.275 18.8427 101.463 18.8195C85.5257 18.7556 69.5769 18.8194 53.6514 18.7904L50.4106 18.7846Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="contact__overlay__text">Knitted Garments</div>
          </div>
        </div>
      </div>
      <div className="knitted__products__cards__wraper">
        <div className="product__card__wraper__img">
          <img src={aboutimg} alt="knitted" />
        </div>
        <div className="knitted__card__components__contaniner">
          <div className="knitted__card__wraper">
            <div className="knitted__card__wraper__svg">
              <svg
                width="78"
                height="68"
                viewBox="0 0 78 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.1955 39.0642C30.7566 39.097 29.536 38.152 28.5223 36.3275C28.4226 36.7969 28.3388 37.1751 28.2625 37.5586C27.1872 42.9042 26.1134 48.25 25.041 53.5962C24.9127 54.2319 24.6338 54.7352 23.9445 54.8676C22.9668 55.0499 22.2479 54.2319 22.46 53.1809C22.8445 51.2435 23.2358 49.3063 23.6338 47.3696C23.6879 47.1079 23.7155 46.9362 23.4112 46.7741C21.1398 45.5642 20.1568 43.6433 20.336 41.0995C20.5643 37.7881 21.0175 34.4961 21.6922 31.2461C22.987 25.0756 25.0155 19.1679 28.1458 13.6776C29.1129 11.9824 30.2592 10.3836 31.3165 8.73712C31.4085 8.58954 31.4731 8.4266 31.5073 8.25611C31.7777 6.94339 32.0492 5.62961 32.2973 4.3116C32.7438 1.9415 34.6716 0.293981 37.0469 0.271731C39.4222 0.249482 41.3744 1.87687 41.8441 4.25226C41.86 4.33702 41.8791 4.42179 41.9045 4.54257C42.0068 4.52805 42.1075 4.50465 42.2057 4.47264C47.9435 1.95104 53.9889 0.691296 60.1975 0.109631C60.5117 0.0682345 60.8309 0.0847556 61.1392 0.158371C61.7235 0.32789 62.0501 0.907436 61.9875 1.52936C61.9249 2.1301 61.4827 2.57296 60.8359 2.65772C58.9622 2.90353 57.0768 3.08152 55.2158 3.39937C50.7048 4.16221 46.3275 5.38381 42.1856 7.37249C41.7041 7.60346 41.4687 7.87999 41.386 8.41503C41.1326 10.0361 40.8176 11.6476 40.5281 13.2633C40.5101 13.3692 40.5059 13.4678 40.4932 13.5917L40.9576 13.7274C43.3181 14.415 44.3689 16.2299 43.7868 18.6169C43.4601 19.9593 42.807 21.147 42.0223 22.2669C39.9333 25.2473 37.3851 27.8176 34.7808 30.336C33.7013 31.3796 32.5815 32.3809 31.4935 33.4086C30.8986 33.9712 30.7364 34.6874 31.0132 35.3835C31.2592 36.0022 31.9474 36.5118 32.6473 36.4207C33.1113 36.3575 33.546 36.158 33.8964 35.8475C36.8518 33.0536 39.9174 30.3943 43.281 28.0973C46.2681 26.0567 49.3814 24.2439 52.9401 23.3868C54.8266 22.9333 56.7671 22.7013 58.6483 22.2309C62.9611 21.1659 67.0529 19.3516 70.7369 16.8709C71.4887 16.3644 72.2564 16.4471 72.7029 17.0828C73.1493 17.7185 72.969 18.5078 72.1992 19.0344C68.5047 21.5602 64.4582 23.3296 60.1657 24.5438C59.8593 24.6306 59.5549 24.7557 59.2421 24.7769C58.4998 24.8383 58.2125 25.2642 57.9792 25.9423C55.9517 31.796 53.8171 37.6095 51.1746 43.2206C50.5627 44.5206 49.8395 45.7528 48.8067 46.772C47.3996 48.1589 45.7814 48.7448 43.8292 48.0604C43.7525 48.0473 43.6739 48.0513 43.599 48.072C43.524 48.0927 43.4546 48.1296 43.3955 48.1801C43.1346 48.4153 42.9279 48.7098 42.6723 48.9514C41.1199 50.4125 39.173 50.6159 37.3703 49.4907C37.0766 49.3074 36.8231 49.3063 36.4891 49.3339C35.6938 49.3975 34.8911 49.354 34.0258 49.354C33.8084 50.5597 33.5772 51.8407 33.345 53.1205C33.2792 53.4861 33.2177 53.8516 33.1446 54.2139C32.9887 54.9831 32.379 55.444 31.6706 55.3381C30.9199 55.2247 30.4501 54.6028 30.5827 53.7965C30.8297 52.2814 31.1128 50.7727 31.3886 49.2608C31.9894 45.9276 32.5903 42.5937 33.1912 39.2591C33.1973 39.1943 33.1988 39.1292 33.1955 39.0642ZM29.4682 31.6276C29.5893 31.5542 29.7062 31.4739 29.8181 31.3871C31.6547 29.6283 33.4934 27.8738 35.3142 26.0991C35.5034 25.8967 35.6301 25.6439 35.6789 25.3712C36.3152 21.9353 36.927 18.4962 37.5463 15.0581C38.1154 11.8987 38.6841 8.73853 39.2525 5.5777C39.4731 4.33808 38.8156 3.27117 37.6619 2.94696C36.3364 2.57402 35.1339 3.4195 34.8327 4.91657C33.2626 12.7526 31.6869 20.5872 30.1055 28.4205C29.8976 29.4514 29.6961 30.4833 29.4724 31.6276H29.4682ZM55.3642 25.5958C53.9367 25.7414 52.5395 26.1022 51.2202 26.6659C51.1088 26.7115 51.0208 26.9033 50.9911 27.0421C49.8682 32.1923 48.109 37.1401 46.2193 42.0477C45.7655 43.2301 45.2851 44.4019 44.8206 45.5684C45.4251 45.9869 46.3678 45.6066 46.8354 45.0228C47.5215 44.1593 48.2617 43.2799 48.6932 42.284C50.3899 38.3533 52.0017 34.3823 53.6061 30.4102C54.2349 28.8602 54.7609 27.2656 55.3685 25.5958H55.3642ZM48.0315 28.1386C46.9468 28.8231 46.0231 29.4694 45.0402 30.0087C43.8737 30.6444 43.1113 31.4867 43.1632 32.8884C43.1619 32.906 43.1583 32.9235 43.1526 32.9403C42.2258 37.6476 40.684 42.1706 39.0383 46.6629C38.962 46.8748 38.8941 47.0867 38.8262 47.2795C39.5929 47.7245 40.1878 47.7277 40.754 47.1418C41.2492 46.6301 41.7455 46.0494 42.0191 45.4053C44.3138 39.9944 46.3826 34.4999 47.8863 28.8082C47.9351 28.643 47.9637 28.4734 48.0411 28.1355L48.0315 28.1386ZM29.9496 16.0063L29.8563 15.9798C29.763 16.1472 29.6569 16.3083 29.5763 16.482C28.8881 17.9717 28.1522 19.4412 27.5276 20.9574C25.2064 26.595 23.8481 32.4773 23.1864 38.526C23.0718 39.5791 22.9881 40.6347 22.935 41.6928C22.8831 42.7523 23.3157 43.5808 24.2574 44.26L29.9496 16.0063ZM40.4062 33.7868L40.2567 33.7105C40.2083 33.7246 40.1622 33.7457 40.1199 33.773C38.8697 34.8845 37.6163 35.9927 36.3767 37.1158C36.2561 37.2415 36.1773 37.4013 36.1508 37.5735C35.6312 40.4157 35.1205 43.2605 34.6185 46.1077C34.5931 46.2497 34.5963 46.4457 34.6758 46.5495C35.0607 47.0602 36.1604 46.8949 36.3724 46.2984C37.0373 44.4401 37.7372 42.5902 38.3374 40.7128C39.0775 38.4189 39.7244 36.0965 40.4062 33.7868ZM39.9979 16.1854C39.6554 18.084 39.3193 19.9455 38.9842 21.8071C39.9672 20.6893 40.8388 19.5249 41.2238 18.0777C41.5281 16.944 41.245 16.4852 40.0001 16.1854H39.9979Z"
                  fill="#B04600"
                />
                <path
                  d="M3.51079 56.0926V56.7198C3.51079 59.7394 3.51079 62.7586 3.51079 65.7775C3.51079 66.5774 3.17782 67.0817 2.55643 67.2533C1.7081 67.4875 0.915977 66.8804 0.904312 65.965C0.890527 64.7466 0.904312 63.5281 0.904312 62.3097C0.904312 59.1312 0.928702 55.9527 0.891588 52.7742C0.876742 51.5272 1.34119 50.5493 2.22557 49.7292C3.49805 48.5511 5.04413 47.856 6.63897 47.2691C9.95273 46.0496 13.4022 45.3779 16.8761 44.8227C17.7 44.6913 18.314 45.1406 18.4328 45.8939C18.5515 46.6472 18.1072 47.2437 17.2801 47.3846C14.3704 47.8794 11.4638 48.4027 8.66857 49.3669C7.37276 49.814 6.13316 50.4264 4.87552 50.9784C4.65387 51.0896 4.44721 51.2285 4.26049 51.3916C3.26159 52.1799 3.27856 52.8357 4.3326 53.5551C4.40893 53.6011 4.49433 53.63 4.58293 53.6399C4.67153 53.6498 4.76122 53.6404 4.84583 53.6123C8.42362 52.005 12.2262 51.221 16.0585 50.5472C16.875 50.4041 17.6989 50.2961 18.5197 50.1689C19.4126 50.0312 20.0912 50.4391 20.2164 51.1892C20.3478 52.0146 19.8335 52.5772 18.8919 52.7573C16.0324 53.3033 13.176 53.8683 10.3228 54.4525C9.53493 54.6167 8.77356 54.9081 8.00052 55.1412L7.98992 55.2884C8.69721 55.5067 9.40026 55.7419 10.1107 55.939C14.5368 57.1595 19.0637 57.8005 23.6202 58.2529C30.7802 58.9544 37.98 59.1629 45.1686 58.8769C52.3274 58.6015 59.4523 57.9986 66.4488 56.3532C67.7001 56.0587 68.9301 55.673 70.1697 55.3287C70.1697 55.281 70.1772 55.2333 70.1814 55.1846C69.999 55.1168 69.8188 55.0426 69.6332 54.9833C65.7309 53.7352 61.7109 53.0497 57.6591 52.539C55.9073 52.3187 54.146 52.1682 52.3889 51.9849C51.5215 51.8938 51.0104 51.3492 51.0602 50.5768C51.108 49.8214 51.7283 49.3054 52.5777 49.3828C58.3208 49.886 64.03 50.597 69.5812 52.2434C70.7962 52.6154 71.9881 53.0591 73.1505 53.572C73.7868 53.8486 74.0147 53.3962 74.3297 53.09C74.6626 52.7658 74.7963 52.3483 74.4559 51.9542C74.1805 51.634 73.8618 51.3537 73.5089 51.1214C71.6564 49.9284 69.5717 49.3044 67.471 48.745C63.6037 47.7151 59.6559 47.1345 55.6836 46.7054C55.2075 46.6546 54.7695 46.555 54.4822 46.1418C54.1725 45.6978 54.1301 45.2105 54.4005 44.7422C54.6921 44.2368 55.164 44.0164 55.7451 44.0821C56.8331 44.2071 57.921 44.3343 59.0058 44.4826C62.8074 45.0007 66.5813 45.6597 70.2461 46.8368C71.9989 47.3994 73.7295 48.0436 75.2088 49.1677C75.8119 49.6243 76.3372 50.1752 76.7644 50.7993C77.0668 51.2749 77.2306 51.8252 77.2373 52.3886C77.2744 56.8904 77.2606 61.3943 77.2575 65.8951C77.2575 66.7204 76.7336 67.2724 75.9797 67.2862C75.2024 67.2968 74.6595 66.7458 74.6563 65.8834C74.6457 62.8289 74.6563 59.7743 74.6563 56.7198V56.1456C69.4264 58.8441 63.7755 59.7288 58.1034 60.4651C49.213 61.6179 40.2781 61.8054 31.3315 61.4123C24.687 61.1199 18.0765 60.4863 11.5794 58.9935C9.2009 58.4468 6.85847 57.7804 4.65601 56.6976C4.2976 56.5312 3.96146 56.3352 3.51079 56.0926Z"
                  fill="#B04600"
                />
              </svg>
            </div>
            <div className="knitted__card__contant">
              <div className="knitted__card__contant__heading">Blends </div>
              <div className="knitted__card__contant__imfo">
                100% Cotton, Poly-Cotton 65/35, 50/50, CVC 60/40, 55/45,
                Tri-blends.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}