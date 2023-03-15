import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import ServicesCard from '../components/services-card'
import PortofolioCard from '../components/portofolio-card'
import BlogCard from '../components/blog-card'
import './hive-learning.css'

const HiveLearning = (props) => {
  return (
    <div className="hive-learning-container">
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
      <main className="hive-learning-main">
        <div className="hive-learning-hero section-container">
          <div className="hive-learning-max-width max-content-container">
            <div className="hive-learning-heading-container">
              <h1 className="hive-learning-text Heading1">Hive Learning</h1>
              <span className="hive-learning-text01">
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
              <button className="hive-learning-primary button-primary button-lg button">
                Get in touch
              </button>
            </div>
            <div className="hive-learning-gallery">
              <div className="hive-learning-container01">
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095-1000w.png"
                  className="hive-learning-image"
                />
              </div>
              <div className="hive-learning-container02">
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095%20%5B1%5D-1000w.png"
                  className="hive-learning-image1"
                />
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095%20%5B2%5D-1000w.png"
                  className="hive-learning-image2"
                />
              </div>
              <div className="hive-learning-container03">
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095%20%5B3%5D-1000w.png"
                  className="hive-learning-image3"
                />
                <div className="hive-learning-container04">
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095%20%5B4%5D-1000w.png"
                    className="hive-learning-image4"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095%20%5B5%5D-1000w.png"
                    className="hive-learning-image5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hive-learning-services section-container">
          <div className="hive-learning-max-width1 max-content-container">
            <div className="hive-learning-heading-container1">
              <div className="hive-learning-text-container">
                <span className="hive-learning-text02">My skillset</span>
                <h2 className="Heading2">
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
              <div className="hive-learning-controls">
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="hive-learning-icon">
                    <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                  </svg>
                </button>
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="hive-learning-icon02">
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="hive-learning-cards-container">
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
        <div className="section-container">
          <div className="hive-learning-max-width2 max-content-container">
            <div className="hive-learning-text-container1">
              <span className="hive-learning-text07">
                Some of My Other work
              </span>
              <h2 className="hive-learning-text08 Heading2">
                Some of the wonderful clients &amp; projects I have worked on
              </h2>
              <span className="hive-learning-text09">
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
              <button className="hive-learning-primary1 button-secondary button-lg button">
                See all projects
              </button>
            </div>
            <div className="hive-learning-tab-selector-header">
              <span className="hive-learning-text13 tab-selector-btn">
                Advertising
              </span>
              <span className="hive-learning-text14 tab-selector-btn">
                Social Media
              </span>
              <span className="hive-learning-text15 tab-selector-btn">
                Branding
              </span>
              <span className="hive-learning-text16 tab-selector-btn">
                UI / UX
              </span>
              <span className="hive-learning-text17 tab-selector-btn">
                Packaging
              </span>
              <span className="tab-selector-btn">Product Design</span>
            </div>
            <div className="hive-learning-tab-selector-cards-container">
              <PortofolioCard
                image_src="/playground_assets/unsplash_qj15unotnh0-400h.png"
                rootClassName="portofolio-card-root-class-name6"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/unsplash_wwqrpsnbpq4-400h.png"
                project_title="A brand-new advertising idea"
                rootClassName="portofolio-card-root-class-name7"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjb2NhJTIwY29sYXxlbnwwfHx8fDE2NDY5MjYyNTM&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Coca-Cola Summer Concept Campaign - 2021"
                rootClassName="portofolio-card-root-class-name8"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG51dGVsbGF8ZW58MHx8fHwxNjQ2OTI2MTky&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Ad Campaign - I love you as much as I love Nutella"
                rootClassName="portofolio-card-root-class-name9"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNvY2ElMjBjb2xhfGVufDB8fHx8MTY0NjkyNjI1Mw&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Coca-Colla Next Door Campaign - conceptual"
                rootClassName="portofolio-card-root-class-name10"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXJidWNrc3xlbnwwfHx8fDE2NDY5MjYyMzc&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Starbucks secret is a smile when you get your latte"
                rootClassName="portofolio-card-root-class-name11"
              ></PortofolioCard>
            </div>
          </div>
        </div>
        <div className="hive-learning-about section-container">
          <div className="hive-learning-max-width3 max-content-container">
            <div className="hive-learning-text-container2">
              <span className="hive-learning-text19">about Me</span>
              <h2 className="hive-learning-text20 Heading2">
                I build with brands.
              </h2>
              <span className="hive-learning-text21">
                Employing established or emerging brands to enhance their
                products to achieve peak performance and user satisfaction.
              </span>
              <div className="hive-learning-container05">
                <div className="hive-learning-checklist">
                  <div className="hive-learning-check-item">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="hive-learning-icon04"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="hive-learning-text22">
                      Quality services and support all time
                    </span>
                  </div>
                  <div className="hive-learning-check-item1">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="hive-learning-icon06"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="hive-learning-text23">
                      Long-term strategy development
                    </span>
                  </div>
                  <div className="hive-learning-check-item2">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="hive-learning-icon08"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="hive-learning-text24">
                      FREE Brand Audit for startups
                    </span>
                  </div>
                  <div className="hive-learning-check-item3">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="hive-learning-icon10"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="hive-learning-text25">
                      Over 10 years in the business
                    </span>
                  </div>
                  <div className="hive-learning-check-item4">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="hive-learning-icon12"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="hive-learning-text26">
                      Future-Proofing Projects
                    </span>
                  </div>
                  <div className="hive-learning-check-item5">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="hive-learning-icon14"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="hive-learning-text27">
                      Support in any implementation
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/playground_assets/rectangle%20109-1000w.png"
                  className="hive-learning-image6"
                />
              </div>
            </div>
            <div className="hive-learning-image-container"></div>
          </div>
        </div>
        <div className="hive-learning-process section-container">
          <div className="hive-learning-max-width4 max-content-container">
            <span className="hive-learning-text28">My process</span>
            <h2 className="hive-learning-text29 Heading2">
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
            <div className="hive-learning-step">
              <span className="hive-learning-text33">01</span>
              <div className="hive-learning-container06">
                <span className="hive-learning-text34">
                  Research &amp; Understanding
                </span>
                <span className="hive-learning-text35">
                  Understanding the task at hand and the problem to be
                  solved. Conduct user research to gather insights about the
                  target audience&apos;s needs, preferences, and behaviors. This
                  step involves gathering data from various sources, such as
                  user interviews, surveys, and analytics, to inform the design
                  process. This is the foundation for the task.
                </span>
              </div>
            </div>
            <div className="hive-learning-step1">
              <span className="hive-learning-text36">02</span>
              <div className="hive-learning-container07">
                <span className="hive-learning-text37">
                  Ideation
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="hive-learning-text38">
                  Generate ideas and concepts for the design based on the
                  insights gathered from the research. This step involves
                  brainstorming, sketching, and creating user personas and
                  scenarios.
                </span>
              </div>
            </div>
            <div className="hive-learning-step2">
              <span className="hive-learning-text39">03</span>
              <div className="hive-learning-container08">
                <span className="hive-learning-text40">Design</span>
                <span className="hive-learning-text41">
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
            <div className="hive-learning-step3">
              <span className="hive-learning-text42">04</span>
              <div className="hive-learning-container09">
                <span className="hive-learning-text43">Testing</span>
                <span className="hive-learning-text44">
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
            <div className="hive-learning-step4">
              <span className="hive-learning-text45">05</span>
              <div className="hive-learning-container10">
                <span className="hive-learning-text46">Implementation</span>
                <span className="hive-learning-text47">
                  As a creative, using your professional judgement, you should
                  begin filtering your various ideas and designs, retaining the
                  strongest relevant material.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="hive-learning-max-width5 max-content-container">
            <span className="hive-learning-text48">from blog</span>
            <h2 className="hive-learning-text49 Heading2">
              <span>Our latest articles and resources</span>
            </h2>
            <span className="hive-learning-text51">
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
            <button className="hive-learning-primary2 button-secondary button-lg button">
              Explore the blog
            </button>
            <div className="hive-learning-blog-cards-container">
              <BlogCard rootClassName="blog-card-root-class-name2"></BlogCard>
              <BlogCard
                text1="Aug 14, 2022"
                button="advertising"
                image_src="/playground_assets/rectangle%2099%20%5B1%5D-1500w.png"
                rootClassName="blog-card-root-class-name3"
              ></BlogCard>
              <BlogCard
                text1="Jul 12, 2022"
                button="Branding"
                image_src="/playground_assets/unsplash_h7qmwoxf6z8-1500w.png"
              ></BlogCard>
            </div>
          </div>
        </div>
        <div className="hive-learning-banner section-container">
          <div className="hive-learning-max-width6 max-content-container">
            <span className="hive-learning-text55">what are you waiting?</span>
            <h2 className="hive-learning-text56 Heading2">
              <span>Let’s collaborate!</span>
            </h2>
            <span className="hive-learning-text58">
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
            <button className="hive-learning-primary3 button-lg button-secondary-white button">
              Contact us
            </button>
          </div>
        </div>
      </main>
      <div className="section-container">
        <div className="max-content-container">
          <div className="hive-learning-top-part">
            <div className="hive-learning-links-container">
              <div className="hive-learning-product-container">
                <span className="hive-learning-text62">Product</span>
                <span className="hive-learning-text63">About</span>
                <span className="hive-learning-text64">Portofolio</span>
                <span>Blog</span>
              </div>
              <div className="hive-learning-navigate-container">
                <span className="hive-learning-text66">Navigate</span>
                <span className="hive-learning-text67">Copyrights</span>
                <span className="hive-learning-text68">Sitemap</span>
                <span>Privacy Policy</span>
              </div>
              <div className="hive-learning-contact-container">
                <span className="hive-learning-text70">Contact Us</span>
                <span className="hive-learning-text71">
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
            <div className="hive-learning-subscribe-container">
              <span className="hive-learning-text79">
                Subscribe to our newsletter
              </span>
              <input
                type="text"
                placeholder="Enter your e-mail address"
                className="hive-learning-textinput input"
              />
              <button className="button-primary button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="hive-learning-separator"></div>
        <footer className="hive-learning-max-width8 max-content-container">
          <img
            alt="image"
            src="/playground_assets/portfolio_title-200h.png"
            className="hive-learning-image7"
          />
        </footer>
      </div>
    </div>
  )
}

export default HiveLearning
