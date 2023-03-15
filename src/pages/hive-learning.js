import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import ServicesCard from '../components/services-card'
import PortofolioCard from '../components/portofolio-card'
import BlogCard from '../components/blog-card'
import projectStyles from '../style.module.css'
import styles from './hive-learning.module.css'

const HiveLearning = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>
          Hive-Learning - Suleiman Leadbitter UX UI Digital Product Designer
        </title>
        <meta
          name="description"
          content="Discover the impressive resume &amp; portfolio of Suleiman Leadbitter, a talented UX UI Digital Product Designer with a passion for creating exceptional experiences"
        />
        <meta
          property="og:title"
          content="Hive-Learning - Suleiman Leadbitter UX UI Digital Product Designer"
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
                Hive Learning
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
                  src="/playground_assets/rectangle%2095-1000w.png"
                  className={styles['image']}
                />
              </div>
              <div className={styles['container02']}>
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095%20%5B1%5D-1000w.png"
                  className={styles['image1']}
                />
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095%20%5B2%5D-1000w.png"
                  className={styles['image2']}
                />
              </div>
              <div className={styles['container03']}>
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095%20%5B3%5D-1000w.png"
                  className={styles['image3']}
                />
                <div className={styles['container04']}>
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095%20%5B4%5D-1000w.png"
                    className={styles['image4']}
                  />
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095%20%5B5%5D-1000w.png"
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
                    Using a wide range of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
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
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-width2']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['text-container1']}>
              <span className={styles['text07']}>Some of My Other work</span>
              <h2
                className={` ${styles['text08']} ${projectStyles['heading2']} `}
              >
                Some of the wonderful clients &amp; projects I have worked on
              </h2>
              <span className={styles['text09']}>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation.
                </span>
              </span>
              <button
                className={` ${styles['primary1']} ${projectStyles['button-secondary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
              >
                See all projects
              </button>
            </div>
            <div className={styles['tab-selector-header']}>
              <span
                className={` ${styles['text13']} ${projectStyles['tab-selector-btn']} `}
              >
                Advertising
              </span>
              <span
                className={` ${styles['text14']} ${projectStyles['tab-selector-btn']} `}
              >
                Social Media
              </span>
              <span
                className={` ${styles['text15']} ${projectStyles['tab-selector-btn']} `}
              >
                Branding
              </span>
              <span
                className={` ${styles['text16']} ${projectStyles['tab-selector-btn']} `}
              >
                UI / UX
              </span>
              <span
                className={` ${styles['text17']} ${projectStyles['tab-selector-btn']} `}
              >
                Packaging
              </span>
              <span className={projectStyles['tab-selector-btn']}>
                Product Design
              </span>
            </div>
            <div className={styles['tab-selector-cards-container']}>
              <PortofolioCard
                image_src="/playground_assets/unsplash_qj15unotnh0-400h.png"
                rootClassName="root-class-name6"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/unsplash_wwqrpsnbpq4-400h.png"
                project_title="A brand-new advertising idea"
                rootClassName="root-class-name7"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjb2NhJTIwY29sYXxlbnwwfHx8fDE2NDY5MjYyNTM&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Coca-Cola Summer Concept Campaign - 2021"
                rootClassName="root-class-name8"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG51dGVsbGF8ZW58MHx8fHwxNjQ2OTI2MTky&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Ad Campaign - I love you as much as I love Nutella"
                rootClassName="root-class-name9"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNvY2ElMjBjb2xhfGVufDB8fHx8MTY0NjkyNjI1Mw&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Coca-Colla Next Door Campaign - conceptual"
                rootClassName="root-class-name10"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXJidWNrc3xlbnwwfHx8fDE2NDY5MjYyMzc&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Starbucks secret is a smile when you get your latte"
                rootClassName="root-class-name11"
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
            <div className={styles['text-container2']}>
              <span className={styles['text19']}>about Me</span>
              <h2
                className={` ${styles['text20']} ${projectStyles['heading2']} `}
              >
                I build with brands.
              </h2>
              <span className={styles['text21']}>
                Employing established or emerging brands to enhance their
                products to achieve peak performance and user satisfaction.
              </span>
              <div className={styles['container05']}>
                <div className={styles['checklist']}>
                  <div className={styles['check-item']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className={styles['text22']}>
                      Quality services and support all time
                    </span>
                  </div>
                  <div className={styles['check-item1']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className={styles['text23']}>
                      Long-term strategy development
                    </span>
                  </div>
                  <div className={styles['check-item2']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className={styles['text24']}>
                      FREE Brand Audit for startups
                    </span>
                  </div>
                  <div className={styles['check-item3']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon10']}>
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className={styles['text25']}>
                      Over 10 years in the business
                    </span>
                  </div>
                  <div className={styles['check-item4']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon12']}>
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className={styles['text26']}>
                      Future-Proofing Projects
                    </span>
                  </div>
                  <div className={styles['check-item5']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon14']}>
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className={styles['text27']}>
                      Support in any implementation
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/playground_assets/rectangle%20109-1000w.png"
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
            <span className={styles['text28']}>My process</span>
            <h2
              className={` ${styles['text29']} ${projectStyles['heading2']} `}
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
              <span className={styles['text33']}>01</span>
              <div className={styles['container06']}>
                <span className={styles['text34']}>
                  Research &amp; Understanding
                </span>
                <span className={styles['text35']}>
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
              <span className={styles['text36']}>02</span>
              <div className={styles['container07']}>
                <span className={styles['text37']}>
                  Ideation
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text38']}>
                  Generate ideas and concepts for the design based on the
                  insights gathered from the research. This step involves
                  brainstorming, sketching, and creating user personas and
                  scenarios.
                </span>
              </div>
            </div>
            <div className={styles['step2']}>
              <span className={styles['text39']}>03</span>
              <div className={styles['container08']}>
                <span className={styles['text40']}>Design</span>
                <span className={styles['text41']}>
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
              <span className={styles['text42']}>04</span>
              <div className={styles['container09']}>
                <span className={styles['text43']}>Testing</span>
                <span className={styles['text44']}>
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
              <span className={styles['text45']}>05</span>
              <div className={styles['container10']}>
                <span className={styles['text46']}>Implementation</span>
                <span className={styles['text47']}>
                  As a creative, using your professional judgement, you should
                  begin filtering your various ideas and designs, retaining the
                  strongest relevant material.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-width5']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text48']}>from blog</span>
            <h2
              className={` ${styles['text49']} ${projectStyles['heading2']} `}
            >
              <span>Our latest articles and resources</span>
            </h2>
            <span className={styles['text51']}>
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
            <button
              className={` ${styles['primary2']} ${projectStyles['button-secondary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
            >
              Explore the blog
            </button>
            <div className={styles['blog-cards-container']}>
              <BlogCard rootClassName="root-class-name2"></BlogCard>
              <BlogCard
                text1="Aug 14, 2022"
                button="advertising"
                image_src="/playground_assets/rectangle%2099%20%5B1%5D-1500w.png"
                rootClassName="root-class-name3"
              ></BlogCard>
              <BlogCard
                text1="Jul 12, 2022"
                button="Branding"
                image_src="/playground_assets/unsplash_h7qmwoxf6z8-1500w.png"
              ></BlogCard>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['banner']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width6']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text55']}>what are you waiting?</span>
            <h2
              className={` ${styles['text56']} ${projectStyles['heading2']} `}
            >
              <span>Let’s collaborate!</span>
            </h2>
            <span className={styles['text58']}>
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
            <button
              className={` ${styles['primary3']} ${projectStyles['button-lg']} ${projectStyles['button-secondary-white']} ${projectStyles['button']} `}
            >
              Contact us
            </button>
          </div>
        </div>
      </main>
      <div className={projectStyles['section-container']}>
        <div className={projectStyles['max-content-container']}>
          <div className={styles['top-part']}>
            <div className={styles['links-container']}>
              <div className={styles['product-container']}>
                <span className={styles['text62']}>Product</span>
                <span className={styles['text63']}>About</span>
                <span className={styles['text64']}>Portofolio</span>
                <span>Blog</span>
              </div>
              <div className={styles['navigate-container']}>
                <span className={styles['text66']}>Navigate</span>
                <span className={styles['text67']}>Copyrights</span>
                <span className={styles['text68']}>Sitemap</span>
                <span>Privacy Policy</span>
              </div>
              <div className={styles['contact-container']}>
                <span className={styles['text70']}>Contact Us</span>
                <span className={styles['text71']}>
                  <span>2157 Village View</span>
                  <br></br>
                  <span>
                    Drive, Old Fort
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Myers Florida
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>33901</span>
                </span>
              </div>
            </div>
            <div className={styles['subscribe-container']}>
              <span className={styles['text79']}>
                Subscribe to our newsletter
              </span>
              <input
                type="text"
                placeholder="Enter your e-mail address"
                className={` ${styles['textinput']} ${projectStyles['input']} `}
              />
              <button
                className={` ${projectStyles['button-primary']} ${projectStyles['button']} `}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className={styles['separator']}></div>
        <footer
          className={` ${styles['max-width8']} ${projectStyles['max-content-container']} `}
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

export default HiveLearning
