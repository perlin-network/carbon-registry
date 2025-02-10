import React from 'react';
import './accessibilityStatement.scss';
import HeroHeader from '../../Components/HeroHeader/HeroHeader';
import BackgroundJpg from '../../Assets/Images/accessibility-bg.jpg';

const AccessibilityStatement = () => {
  return (
    <div className="accessibility-container">
      <HeroHeader
        title="Accessibility Statement"
        breadcrumbs={['Accessibility Statement']}
        backgroundImage={BackgroundJpg}
      />
      <div className="page-content">
        <div className="container">
          <p>
            This is an accessibility statement from the National Emissions Registry of the
            Commonwealth of The Bahamas.
          </p>
          <h4>Conformance Status</h4>
          <p>
            The{' '}
            <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">
              Web Content Accessibility Guidelines (WCAG)
            </a>{' '}
            defines requirements for designers and developers to improve accessibility for people
            with disabilities. It defines three levels of conformance: Level A, Level AA, and Level
            AAA.The National Carbon Registry is partially conformant with WCAG 2.1 level AA.
            Partially conformant means that some parts of the content do not fully conform to the
            accessibility standard.
          </p>
          <h4>Feedback</h4>
          <p>
            We welcome your feedback on the accessibility of the National Carbon Registry. Please
            let us know if you encounter accessibility barriers on the National Carbon Registry:
          </p>
          <ul>
            <li>
              <strong>Postal Address:</strong> National Emission Registrar, Cecil Wallace-Whitfield
              Centre, P.O. Box CB-10980 Nassau, Bahamas
            </li>
            <li>
              <a href="https://ner.bahamas.gov.bs/contact">https://NER.bahamas.gov.bs/contact</a>
            </li>
          </ul>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default AccessibilityStatement;
