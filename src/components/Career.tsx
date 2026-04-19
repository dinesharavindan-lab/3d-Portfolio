import "./styles/Career.css";
const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Jr UX Designer</h4>
                <h5>Upfinzo Fintech Pvt Ltd</h5>
              </div>
              <div className="career-date">
                <h6>Sep '25 – Present</h6>
                <span className="career-location">( UAE )</span>
              </div>
            </div>
            <p>
              Designing fintech products, task management systems, and landing
              pages. Collaborating with stakeholders and developers to deliver
              usable, clean interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>Risolutor Technologies</h5>
              </div>
              <div className="career-date">
                <h6>Oct '23 – Sep '25</h6>
                <span className="career-location">( Chennai )</span>
              </div>
            </div>
            <p>
              Founding Designer. Led end-to-end design for client and in-house
              products. Converted complex requirements into clear user flows and
              UI. Ensured final product matched design through validation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Designer</h4>
                <h5>Spayci AI Labs</h5>
              </div>
              <div className="career-date">
                <h6>Jun '22 – Sep '23</h6>
                <span className="career-location">( Chennai )</span>
              </div>
            </div>
            <p>
              Worked on product improvements, responsive fixes, and UI
              enhancements. Supported design needs for smaller modules and
              creatives.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Architecture</h4>
                <h5>Sathyabama University</h5>
              </div>
              <div className="career-date">
                <h6>Aug '17 – '22</h6>
                <span className="career-location">( Chennai )</span>
              </div>
            </div>
            <p>
              Five-year professional degree in architecture covering design
              thinking, spatial planning, and visual communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;