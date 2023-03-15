import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import ServicesCard from '../components/services-card'
import PortofolioCard from '../components/portofolio-card'
import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Suleiman Leadbitter UX UI Digital Product Designer</title>
        <meta
          name="description"
          content="Discover the impressive resume &amp; portfolio of Suleiman Leadbitter, a talented UX UI Digital Product Designer with a passion for creating exceptional experiences"
        />
        <meta
          property="og:title"
          content="Suleiman Leadbitter UX UI Digital Product Designer"
        />
        <meta
          property="og:description"
          content="Discover the impressive resume &amp; portfolio of Suleiman Leadbitter, a talented UX UI Digital Product Designer with a passion for creating exceptional experiences"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8976a3c5-5027-4434-8a9d-ebef7a123faa/c4311a4f-0ed2-4db8-b3e9-33f51866ea2c?org_if_sml=1"
        />
      </Helmet>
      <Navigation></Navigation>
      <main className={styles['main']}>
        <div
          className={` ${styles['hero']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container']}>
              <h1
                className={` ${styles['text']} ${projectStyles['heading1']} `}
              >
                Hi! I&apos;m Sul, I&apos;m a digital UX &amp; UI product
                designer
              </h1>
              <span className={styles['text01']}>
                As a UX designer, I aim to create seamless and intuitive
                experiences that exceed users&apos; expectations. With a deep
                understanding of user behavior and psychology, I approach each
                project with empathy and curiosity. I prioritise collaboration
                and iteration to ensure that every detail is thoughtfully
                crafted, creating products that have a positive impact on the
                projects I work on.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <button
                className={` ${styles['primary']} ${projectStyles['button-primary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
              >
                Get in touch
              </button>
            </div>
            <div className={styles['gallery']}>
              <div className={styles['container01']}>
                <img
                  alt="image"
                  src="/playground_assets/takeorders-1000w.png"
                  className={styles['image']}
                />
              </div>
              <div className={styles['container02']}>
                <img
                  alt="image"
                  src="/playground_assets/screenshot%202023-03-15%20at%2017.48.07-1000w.png"
                  className={styles['image1']}
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHdvcmtzaG9wfGVufDB8fHx8MTY3ODkwMzEyMg&amp;ixlib=rb-4.0.3&amp;w=1000"
                  className={styles['image2']}
                />
              </div>
              <div className={styles['container03']}>
                <img
                  alt="image"
                  src="/playground_assets/hive-1000w.png"
                  className={styles['image3']}
                />
                <div className={styles['container04']}>
                  <img
                    alt="image"
                    src="/playground_assets/screenshot%202023-03-15%20at%2017.50.31-1000w.png"
                    className={styles['image4']}
                  />
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1603975711481-18b7aaca4caa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMyfHx3b3Jrc2hvcHxlbnwwfHx8fDE2Nzg5MDMxMzg&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className={styles['image5']}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['services']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width1']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container1']}>
              <div className={styles['text-container']}>
                <span className={styles['text02']}>My skillset</span>
                <h2 className={projectStyles['heading2']}>
                  <span>
                    Using a range of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>disciplines to get to the ideal solution.</span>
                </h2>
              </div>
              <div className={styles['controls']}>
                <button className={projectStyles['control-btn']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                    <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                  </svg>
                </button>
                <button className={projectStyles['control-btn']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles['cards-container']}>
              <ServicesCard></ServicesCard>
              <ServicesCard
                text="Visual design"
                text1="Designers need to have a strong sense of aesthetics and be able to create visually appealing designs that communicate the intended message effectively. This involves creating an appealing visual style, selecting colors and typography, and using imagery to enhance the user experience."
                image_src="/playground_assets/file-document-200h.png"
              ></ServicesCard>
              <ServicesCard
                text="Prototyping"
                text1="UX UI designers must create accurate prototypes to test and refine designs, using tools like wireframes, mockups, and high-fidelity prototypes while also allowing for user feedback and iteration."
                image_src="/playground_assets/dice-5-200h.png"
              ></ServicesCard>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['portofolio']} ${projectStyles['section-container']} `}
        >
          <div
            id="clients"
            className={` ${styles['max-width2']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['text-container1']}>
              <span className={styles['text06']}>Some of My Previous</span>
              <h2
                className={` ${styles['text07']} ${projectStyles['heading2']} `}
              >
                Some of the wonderful clients &amp; projects I have had the
                pleasure to work on.
              </h2>
            </div>
            <div className={styles['tab-selector-cards-container']}>
              <PortofolioCard
                image_src="/playground_assets/nhs%403x1-400h.png"
                project_title="NHS"
                rootClassName="root-class-name"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/govscot3-400h.png"
                project_title="NHS"
                rootClassName="root-class-name14"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/hivelearning%402x1-400h.png"
                project_title="NHS"
                rootClassName="root-class-name13"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/greeneking%403x1-400h.png"
                project_title="NHS"
                rootClassName="root-class-name12"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/disney%403x1-400h.png"
                project_title="A brand-new advertising idea"
                rootClassName="root-class-name5"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/bc%403x1-400h.png"
                project_title="Coca-Cola Summer Concept Campaign - 2021"
                rootClassName="root-class-name4"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/britishcouncil%403x1-400h.png"
                project_title="Ad Campaign - I love you as much as I love Nutella"
                rootClassName="root-class-name3"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/made%403x1-400h.png"
                project_title="Coca-Colla Next Door Campaign - conceptual"
                rootClassName="root-class-name2"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/jncc%403x1-400h.png"
                project_title="Starbucks secret is a smile when you get your latte"
                rootClassName="root-class-name1"
              ></PortofolioCard>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['about']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width3']} ${projectStyles['max-content-container']} `}
          >
            <div id="aboutme" className={styles['text-container2']}>
              <span className={styles['text08']}>about Me</span>
              <h2
                className={` ${styles['text09']} ${projectStyles['heading2']} `}
              >
                I build with brands.
              </h2>
              <span className={styles['text10']}>
                Employing established or emerging brands to enhance their
                products to achieve peak performance and user satisfaction.
              </span>
              <div className={styles['container05']}>
                <div className={styles['checklist']}>
                  <div className={styles['check-item']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className={styles['text11']}>
                      Quality services and support all time
                    </span>
                  </div>
                  <div className={styles['check-item1']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className={styles['text12']}>
                      Long-term strategy development
                    </span>
                  </div>
                  <div className={styles['check-item2']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className={styles['text13']}>
                      FREE Brand Audit for startups
                    </span>
                  </div>
                  <div className={styles['check-item3']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon10']}>
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className={styles['text14']}>
                      Over 10 years in the business
                    </span>
                  </div>
                  <div className={styles['check-item4']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon12']}>
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className={styles['text15']}>
                      Future-Proofing Projects
                    </span>
                  </div>
                  <div className={styles['check-item5']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon14']}>
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className={styles['text16']}>
                      Support in any implementation
                    </span>
                  </div>
                  <div className={styles['container06']}>
                    <a
                      href="https://drp.li/d5Ufp"
                      target="_blank"
                      rel="noreferrer noopener"
                      className={` ${styles['primary1']} ${projectStyles['button-primary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
                    >
                      View my resume
                    </a>
                    <a
                      href="mailto:work@sulei.uk?subject=From the site ~ [insert your profound subject here]"
                      className={` ${styles['primary2']} ${projectStyles['button-primary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
                    >
                      Get in touch
                    </a>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/playground_assets/img_7906-1000w.jpg"
                  className={styles['image6']}
                />
              </div>
            </div>
            <div className={styles['image-container']}></div>
          </div>
        </div>
        <div
          className={` ${styles['process']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width4']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text17']}>My process</span>
            <h2
              className={` ${styles['text18']} ${projectStyles['heading2']} `}
            >
              <span>
                Sticking to a simple five step process.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Take a look.</span>
            </h2>
            <div className={styles['step']}>
              <span className={styles['text22']}>01</span>
              <div className={styles['container07']}>
                <span className={styles['text23']}>
                  Research &amp; Understanding
                </span>
                <span className={styles['text24']}>
                  Understanding the task at hand and the problem to be
                  solved. Conduct user research to gather insights about the
                  target audience&apos;s needs, preferences, and behaviors. This
                  step involves gathering data from various sources, such as
                  user interviews, surveys, and analytics, to inform the design
                  process. This is the foundation for the task.
                </span>
              </div>
            </div>
            <div className={styles['step1']}>
              <span className={styles['text25']}>02</span>
              <div className={styles['container08']}>
                <span className={styles['text26']}>
                  Ideation
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text27']}>
                  Generate ideas and concepts for the design based on the
                  insights gathered from the research. This step involves
                  brainstorming, sketching, and creating user personas and
                  scenarios.
                </span>
              </div>
            </div>
            <div className={styles['step2']}>
              <span className={styles['text28']}>03</span>
              <div className={styles['container09']}>
                <span className={styles['text29']}>Design</span>
                <span className={styles['text30']}>
                  There are countless businesses already in existence, so it’s
                  very likely that you won’t be the first person to think of an
                  idea or product. There are countless businesses already in
                  existence, so it’s very likely that you won’t be the first
                  person to think of an idea or product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className={styles['step3']}>
              <span className={styles['text31']}>04</span>
              <div className={styles['container10']}>
                <span className={styles['text32']}>Testing</span>
                <span className={styles['text33']}>
                  There are countless businesses already in existence, so it’s
                  very likely that you won’t be the first person to think of an
                  idea or product. There are countless businesses already in
                  existence, so it’s very likely that you won’t be the first
                  person to think of an idea or product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className={styles['step4']}>
              <span className={styles['text34']}>05</span>
              <div className={styles['container11']}>
                <span className={styles['text35']}>Implementation</span>
                <span className={styles['text36']}>
                  As a creative, using your professional judgement, you should
                  begin filtering your various ideas and designs, retaining the
                  strongest relevant material.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['banner']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width5']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text37']}>what are you waiting?</span>
            <h2
              className={` ${styles['text38']} ${projectStyles['heading2']} `}
            >
              Let’s collaborate!
            </h2>
            <span className={styles['text39']}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <a
              href="mailto:work@sulei.uk?subject=From the site ~ [insert your profound subject here]"
              className={` ${styles['primary3']} ${projectStyles['button-lg']} ${projectStyles['button-secondary-white']} ${projectStyles['button']} `}
            >
              Contact me 👍🏼
            </a>
          </div>
        </div>
      </main>
      <div className={projectStyles['section-container']}>
        <footer
          className={` ${styles['max-width6']} ${projectStyles['max-content-container']} `}
        >
          <img
            alt="image"
            src="/playground_assets/portfolio_title-200h.png"
            className={styles['image7']}
          />
        </footer>
      </div>
    </div>
  )
}

export default Home
