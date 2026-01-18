import Image from 'next/image';

export const achievementData = [
  {
    title: 'Drager',
    value: 'drager',
    content: (
      <div className="custom-achievement-container">
        <div className="custom-image-container">
          <Image
            src="/images/draegerPic.png"
            alt="drager picture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="custom-image-gradient-bottom"></div>
          <div className="custom-image-gradient-right"></div>
        </div>

        <div className="custom-content-width">
          <Image
            src="/images/Draeger.png"
            width={99}
            height={38}
            alt="Drager logo"
          />
          <p className="custom-subtitle">Pioneering Healthcare</p>
          <p className="custom-text">
            Built India’s leading medical gas pipeline business, delivered
            consistent top sales performance, introduced new medical
            technologies, and drove 40% business contribution growth.
          </p>
        </div>
      </div>
    ),
  },

  {
    title: 'Technopak',
    value: 'technopak',
    content: (
      <div className="custom-achievement-container">
        <div className="custom-image-container">
          <Image
            src="/images/technopakPic.png"
            alt="technopak picture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="custom-image-gradient-bottom"></div>
          <div className="custom-image-gradient-right"></div>
        </div>

        <div className="custom-content-width">
          <Image
            src="/images/technopak.png"
            width={115}
            height={38}
            alt="Technopak logo"
          />
          <p className="custom-subtitle">Building Retail Practice</p>
          <p className="custom-text">
            Established Bangalore office, led international projects, and built
            retail implementation capability while delivering strategic programs
            for India’s top retail brands.
          </p>
        </div>
      </div>
    ),
  },

  {
    title: 'AT Kearney',
    value: 'atkearney',
    content: (
      <div className="custom-achievement-container">
        <div className="custom-image-container">
          <Image
            src="/images/atkearneyPic.jpg"
            alt="AT Kearney picture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="custom-image-gradient-bottom"></div>
          <div className="custom-image-gradient-right"></div>
        </div>

        <div className="custom-content-width">
          <Image
            src="/images/AT-Kearney-logo.png"
            width={183}
            height={38}
            alt="AT Kearney logo"
          />
          <p className="custom-subtitle">Strategic growth</p>
          <p className="custom-text">
            Scaled practice revenue from $150K to $6M, delivered marquee retail
            strategy projects for India’s largest conglomerates, and drove
            high-impact transformation programs.
          </p>
        </div>
      </div>
    ),
  },

  {
    title: 'Walmart',
    value: 'walmart',
    content: (
      <div className="custom-achievement-container">
        <div className="custom-image-container">
          <Image
            src="/images/walmartPic.jpg"
            alt="Walmart picture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="custom-image-gradient-bottom"></div>
          <div className="custom-image-gradient-right"></div>
        </div>

        <div className="custom-content-width">
          <Image
            src="/images/Walmart_logo.png"
            width={157}
            height={38}
            alt="Walmart logo"
          />
          <p className="custom-subtitle">Strategic Retail Expansion</p>
          <p className="custom-text">
            Led launch of 320+ retail stores across formats, accelerated
            national expansion, and transformed organized retail adoption in
            India through scalable store models.
          </p>
        </div>
      </div>
    ),
  },

  {
    title: 'Fitart',
    value: 'fitart',
    content: (
      <div className="custom-achievement-container">
        <div className="custom-image-container">
          <Image
            src="/images/fitartPic.jpg"
            alt="Fitart picture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="custom-image-gradient-bottom"></div>
          <div className="custom-image-gradient-right"></div>
        </div>

        <div className="custom-content-width">
          <Image
            src="/images/Fitart-logo.png"
            width={38}
            height={38}
            alt="Fitart logo"
          />
          <p className="custom-subtitle">Entrepreneurial Journey</p>
          <p className="custom-text">
            Founded and scaled a premium modular furniture brand, delivered 600+
            homes, executed 30+ retail projects, and served elite clients while
            redefining customized interior craftsmanship.
          </p>
        </div>
      </div>
    ),
  },

  {
    title: 'HippoStores',
    value: 'hippostores',
    content: (
      <div className="custom-achievement-container">
        <div className="custom-image-container">
          <Image
            src="/images/hippoPic.jpg"
            alt="Hippo Stores picture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="custom-image-gradient-bottom"></div>
          <div className="custom-image-gradient-right"></div>
        </div>

        <div className="custom-content-width">
          <Image
            src="/images/Hippo-Stores-logo.png"
            width={60}
            height={38}
            alt="Hippo Stores logo"
          />
          <p className="custom-subtitle">Building Material Retail</p>
          <p className="custom-text">
            Launched India’s first large-scale building material marketplace,
            scaled to ₹250 Cr run rate, built a 6,000+ customer base, and
            created an 80-member digital sales force within a year.
          </p>
        </div>
      </div>
    ),
  },

  {
    title: 'Woodkraft',
    value: 'woodkraft',
    content: (
      <div className="custom-achievement-container">
        <div className="custom-image-container">
          <Image
            src="/images/woodkraftPic.jpg"
            alt="Woodkraft picture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="custom-image-gradient-bottom"></div>
          <div className="custom-image-gradient-right"></div>
        </div>

        <div className="custom-content-width">
          <Image
            src="/images/Woodkraft.png"
            width={208}
            height={38}
            alt="Woodkraft logo"
          />
          <p className="custom-subtitle">Strategic Transformation</p>
          <p className="custom-text">
            Built an integrated design-build ecosystem, launched new companies,
            executed JVs, secured Tier-1 client shortlisting, and created an
            ₹800 Cr order book across data centers, healthcare, and advanced
            manufacturing sectors.
          </p>
        </div>
      </div>
    ),
  },
];
