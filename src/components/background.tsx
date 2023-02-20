import styles from "@/styles/Background.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

const Background = () => {
  // stateUse para alterar o número de cartões do carrosel //
  const [slideQuantity, setSlideQuantity] = useState<number>(6);
  // fim //

  // stateUse para alterar o background da página
  const [videoURL, setVideoURL] = useState<string>(
    "https://res.cloudinary.com/dtwt4ywon/video/upload/e_fade:1000/v1676887775/videos/csmBg_mszswq.mp4" //video Inicial//
  );
  // fim //

  const settings = {
    //settings para alterar propriedades do carrosel //
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideQuantity,
    slidesToScroll: 2,
  }; // fim //

  // capturar o tamanho da tela da pagina e alterar o número de cartões mostrados no carrosel //
  const getScreenSize = () => {
    const windowSize = window.innerWidth;
    switch (true) {
      case windowSize <= 768:
        setSlideQuantity(1);
        break;
      case windowSize <= 1290:
        setSlideQuantity(2);
        break;
      default:
        setSlideQuantity(6);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      getScreenSize();
    });
  });
  // fim //

  return (
    <>
      <div className={styles.videoContainer}>
        <video
          src={videoURL}
          autoPlay
          width="1536px"
          height="864px"
        ></video>
        <div className={styles.overlay}></div>
      </div>

      {/* Listagem */}
      <div className={styles.bgSelectionWrapper}>
        {/* slider */}
        <div className={styles.slider}>
          <Slider {...settings}>
            <div>
              <div className={styles.itemWrapper}>
                <div className={styles.imgWrapper}>
                  {" "}
                  <Image
                    onClick={() => setVideoURL("https://res.cloudinary.com/dtwt4ywon/video/upload/e_fade:1000/v1676887775/videos/csmBg_mszswq.mp4")}
                    className="img"
                    src="/img/csm.jpeg"
                    alt="Button-Image"
                    width={184}
                    height={288}
                  />
                </div>
                <div className={styles.titleWrapper}>
                  <h4>Chainsaw Man</h4>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.itemWrapper}>
                <div className={styles.imgWrapper}>
                  <Image
                    onClick={() =>
                      setVideoURL("https://res.cloudinary.com/dtwt4ywon/video/upload/e_fade:1000/v1676887766/videos/dsBg_xzbsbc.mp4")
                    }
                    className="img"
                    src="/img/ds.jpeg"
                    alt="Button-Image"
                    width={184}
                    height={288}
                  />
                </div>
                <div className={styles.titleWrapper}>
                  <h4>Demon Slayer</h4>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.itemWrapper}>
                <div className={styles.imgWrapper}>
                  <Image
                    onClick={() =>
                      setVideoURL("https://res.cloudinary.com/dtwt4ywon/video/upload/e_fade:1000/v1676887769/videos/ubwBg_dho2pa.mp4")
                    }
                    className="img"
                    src="/img/ubw.jpeg"
                    alt="Button-Image"
                    width={184}
                    height={288}
                  />
                </div>
                <div className={styles.titleWrapper}>
                  <h4>Fate Stay Night</h4>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.itemWrapper}>
                <div className={styles.imgWrapper}>
                  <Image
                    onClick={() =>
                      setVideoURL("https://res.cloudinary.com/dtwt4ywon/video/upload/e_fade:1000/v1676887770/videos/jjkBg_ev2uxf.mp4")
                    }
                    src="/img/jjk.jpeg"
                    alt="Button-Image"
                    width={184}
                    height={288}
                  />
                </div>
                <div className={styles.titleWrapper}>
                  <h4>Jujutsu Kaisen</h4>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.itemWrapper}>
                <div className={styles.imgWrapper}>
                  {" "}
                  <Image
                    onClick={() => setVideoURL("https://res.cloudinary.com/dtwt4ywon/video/upload/e_fade:1000/v1676887764/videos/naBg_lnmosi.mp4")}
                    className="img"
                    src="/img/na.jpg"
                    alt="Button-Image"
                    width={184}
                    height={288}
                  />
                </div>
                <div className={styles.titleWrapper}>
                  <h4>Nier:Automata Ver1.1a</h4>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.itemWrapper}>
                <div className={styles.imgWrapper}>
                  {" "}
                  <Image
                    onClick={() => setVideoURL("https://res.cloudinary.com/dtwt4ywon/video/upload/e_fade:1000/v1676887772/videos/sxfBg_x2aq7j.mp4")}
                    className="img"
                    src="/img/sxf.jpeg"
                    alt="Button-Image"
                    width={184}
                    height={288}
                  />
                </div>
                <div className={styles.titleWrapper}>
                  <h4>Spy x Family</h4>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Background;





// https://res.cloudinary.com/dtwt4ywon/video/upload/v1676887775/videos/csmBg_mszswq.mp4