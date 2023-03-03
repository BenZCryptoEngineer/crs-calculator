import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(0);
  const [education, setEducation] = useState('');
  const [firstLanguage, setFirstLanguage] = useState('');
  const [firstLanguageScore, setFirstLanguageScore] = useState(0);
  const [secondLanguage, setSecondLanguage] = useState('');
  const [secondLanguageScore, setSecondLanguageScore] = useState(0);
  const [canadianWorkExperience, setCanadianWorkExperience] = useState(0);
  const [educationWithLanguage, setEducationWithLanguage] = useState('');
  const [foreignWorkExperienceWithLanguage, setForeignWorkExperienceWithLanguage] = useState(0);
  const [certificateOfQualification, setCertificateOfQualification] = useState('');
  const [spouseEducation, setSpouseEducation] = useState('');
  const [spouseFirstLanguage, setSpouseFirstLanguage] = useState('');
  const [spouseFirstLanguageScore, setSpouseFirstLanguageScore] = useState(0);
  const [spouseSecondLanguage, setSpouseSecondLanguage] = useState('');
  const [spouseSecondLanguageScore, setSpouseSecondLanguageScore] = useState(0);
  const [spouseCanadianWorkExperience, setSpouseCanadianWorkExperience] = useState(0);
  const [score, setScore] = useState(0);

  const handleCalculate = () => {
    let score = calculateCRSScore(age, education, firstLanguage, firstLanguageScore, secondLanguage, secondLanguageScore, canadianWorkExperience, educationWithLanguage, foreignWorkExperienceWithLanguage, certificateOfQualification, spouseEducation, spouseFirstLanguage, spouseFirstLanguageScore, spouseSecondLanguage, spouseSecondLanguageScore, spouseCanadianWorkExperience);
    setScore(score);
  };

  const calculateCRSScore = (age, education, firstLanguage, firstLanguageScore, secondLanguage, secondLanguageScore, canadianWorkExperience, educationWithLanguage, foreignWorkExperienceWithLanguage, certificateOfQualification, spouseEducation, spouseFirstLanguage, spouseFirstLanguageScore, spouseSecondLanguage, spouseSecondLanguageScore, spouseCanadianWorkExperience) => {
    let score = 0;

    // Core/Human Capital Factors
    if (age >= 18 && age <= 45) {
      score += (age - 18) * 11;
    } else if (age > 45 && age < 50) {
      score += 99;
    } else if (age >= 50 && age <= 53) {
      score += (53 - age) * 2;
    }

    if (education === 'No degree') {
      score += 0;
    } else if (education === 'High school diploma') {
      score += 28;
    } else if (education === 'Post-secondary diploma or certificate (1-2 years)') {
      score += 84;
    } else if (education === 'Post-secondary diploma or certificate (3 years or longer)') {
      score += 91;
    } else if (education === "Bachelor's degree") {
      score += 112;
    } else if (education === "Master's degree") {
      score += 126;
    } else if (education === "Doctoral degree") {
      score += 140;
    }

    if (firstLanguageScore > 0) {
      if (firstLanguage === 'English') {
        score += Math.floor(firstLanguageScore * 1.0);
      } else if (firstLanguage === 'French') {
        score += Math.floor(firstLanguageScore * 1.25);
      }

      if (secondLanguageScore > 0) {
        if (secondLanguage === 'English') {
          score += Math.floor(secondLanguageScore * 1.0);
        } else if (secondLanguage === 'French') {
          score += Math.floor(secondLanguageScore * 1.25);
        }
      }
    }

    if (canadianWorkExperience >= 1 && canadianWorkExperience <= 2) {
      score += 13;
    } else if (canadianWorkExperience >= 3 && canadianWorkExperience <= 4) {
      score += 25;
    } else if (canadianWorkExperience >= 5) {
      score += 50;
    }

    // Skill Transferability Factors
    if (educationWithLanguage === 'Yes') {
      if (foreignWorkExperienceWithLanguage < 1) {
        score += 0;
      } else if (foreignWorkExperienceWithLanguage >= 1 && foreignWorkExperienceWithLanguage <= 2) {
        score += 13;
      } else if (foreignWorkExperienceWithLanguage >= 3 && foreignWorkExperienceWithLanguage <= 4) {
        score += 25;
      } else if (foreignWorkExperienceWithLanguage >= 5) {
        score += 50;
      }
    }

    if (certificateOfQualification === 'Yes') {
      score += 50;
    }

    // Spouse/Common-law Partner Factors
    if (spouseEducation === 'No degree') {
      score += 0;
    } else if (spouseEducation === 'High school diploma') {
      score += 2;
    } else if (spouseEducation === 'Post-secondary diploma or certificate (1-2 years)') {
      score += 6;
    } else if (spouseEducation === 'Post-secondary diploma or certificate (3 years or longer)') {
      score += 7;
    } else if (spouseEducation === "Bachelor's degree") {
      score += 8;
    } else if (spouseEducation === "Master's degree") {
      score += 10;
    } else if (spouseEducation === "Doctoral degree") {
      score += 10;
    }

    if (spouseFirstLanguageScore > 0) {
      if (spouseFirstLanguage === 'English') {
        score += Math.floor(spouseFirstLanguageScore * 1.0);
      } else if (spouseFirstLanguage === 'French') {
        score += Math.floor(spouseFirstLanguageScore * 1.25);
      }

      if (spouseSecondLanguageScore > 0) {
        if (spouseSecondLanguage === 'English') {
          score += Math.floor(spouseSecondLanguageScore * 1.0);
        } else if (spouseSecondLanguage === 'French') {
          score += Math.floor(spouseSecondLanguageScore * 1.25);
        }
      }
    }

    if (spouseCanadianWorkExperience >= 1 && spouseCanadianWorkExperience <= 2) {
      score += 10;
    } else if (spouseCanadianWorkExperience >= 3 && spouseCanadianWorkExperience <= 4) {
      score += 20;
    } else if (spouseCanadianWorkExperience >= 5) {
      score += 25;
    }

    // Additional Factors
    score += 100;

    return score;
  };


return (
    <div className="App">
      <h1>Canadian Immigration Points Calculator</h1>
      <form>
        <h2>Core/Human Capital Factors</h2>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" min="0" max="200" value={age} onChange={(e) => setAge(e.target.value)} />

        <label htmlFor="education">Education:</label>
        <select id="education" name="education" value={education} onChange={(e) => setEducation(e.target.value)}>
          <option value="No degree">No degree</option>
          <option value="High school diploma">High school diploma</option>
          <option value="Post-secondary diploma or certificate (1-2 years)">Post-secondary diploma or certificate (1-2 years)</option>
          <option value="Post-secondary diploma or certificate (3 years or longer)">Post-secondary diploma or certificate (3 years or longer)</option>
          <option value="Bachelor's degree">Bachelor's degree</option>
          <option value="Master's degree">Master's degree</option>
          <option value="Doctoral degree">Doctoral degree</option>
        </select>

        <label htmlFor="first-language">First Language:</label>
        <select id="first-language" name="first-language" value={firstLanguage} onChange={(e) => setFirstLanguage(e.target.value)}>
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="French">French</option>
        </select>
        <label htmlFor="first-language-score">Score:</label>
        <input type="number" id="first-language-score" name="first-language-score" min="0" max="10" step="0.5" value={firstLanguageScore} onChange={(e) => setFirstLanguageScore(e.target.value)} />

        <label htmlFor="second-language">Second Language:</label>
        <select id="second-language" name="second-language" value={secondLanguage} onChange={(e) => setSecondLanguage(e.target.value)}>
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="French">French</option>
        </select>
        <label htmlFor="second-language-score">Score:</label>
        <input type="number" id="second-language-score" name="second-language-score" min="0" max="10" step="0.5" value={secondLanguageScore} onChange={(e) => setSecondLanguageScore(e.target.value)} />

        <label htmlFor="canadian-work-experience">Canadian Work Experience (in years):</label>
        <input type="number" id="canadian-work-experience" name="canadian-work-experience" min="0" max="200" value={canadianWorkExperience} onChange={(e) => setCanadianWorkExperience(e.target.value)} />

        <h2>Skill Transferability Factors</h2>
        <label htmlFor="educationWithLanguage">Do you have education in Canada and work experience in a related field? </label>
        <select id="educationWithLanguage" value={educationWithLanguage} onChange={(e) => setEducationWithLanguage(e.target.value)}>
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {educationWithLanguage === 'Yes' && (
          <>
            <label htmlFor="foreignWorkExperienceWithLanguage">How many years of foreign work experience in a related field do you have? </label>
            <input type="number" id="foreignWorkExperienceWithLanguage" value={foreignWorkExperienceWithLanguage} onChange={(e) => setForeignWorkExperienceWithLanguage(parseInt(e.target.value))} />
          </>
        )}

        <label htmlFor="certificateOfQualification">Do you have a certificate of qualification issued by a Canadian province, territory or federal body? </label>
        <select id="certificateOfQualification" value={certificateOfQualification} onChange={(e) => setCertificateOfQualification(e.target.value)}>
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <h2>Spouse/Common-law Partner Factors</h2>
        <label htmlFor="spouse-education">Spouse's education</label>
        <select id="spouse-education" value={spouseEducation} onChange={(e) => setSpouseEducation(e.target.value)}>
          <option value=""></option>
          <option value="No degree">No degree</option>
          <option value="High school diploma">High school diploma</option>
          <option value="Post-secondary diploma or certificate (1-2 years)">Post-secondary diploma or certificate (1-2 years)</option>
          <option value="Post-secondary diploma or certificate (3 years or longer)">Post-secondary diploma or certificate (3 years or longer)</option>
          <option value="Bachelor's degree">Bachelor's degree</option>
          <option value="Master's degree">Master's degree</option>
          <option value="Doctoral degree">Doctoral degree</option>
        </select>

        <label htmlFor="spouse-first-language">Spouse's first language</label>
        <select id="spouse-first-language" value={spouseFirstLanguage} onChange={(e) => setSpouseFirstLanguage(e.target.value)}>
          <option value=""></option>
          <option value="English">English</option>
          <option value="French">French</option>
        </select>

        {spouseFirstLanguage !== '' && (
          <>
            <label htmlFor="spouse-first-language-score">Spouse's first language score</label>
            <input type="number" id="spouse-first-language-score" value={spouseFirstLanguageScore} onChange={(e) => setSpouseFirstLanguageScore(parseInt(e.target.value))} />
          </>
        )}

        <label htmlFor="spouse-second-language">Spouse's second language</label>
        <select id="spouse-second-language" value={spouseSecondLanguage} onChange={(e) => setSpouseSecondLanguage(e.target.value)}>
          <option value=""></option>
          <option value="English">English</option>
          <option value="French">French</option>
        </select>

        {spouseSecondLanguage !== '' && (
          <>
            <label htmlFor="spouse-second-language-score">Spouse's second language score</label>
            <input type="number" id="spouse-second-language-score" value={spouseSecondLanguageScore} onChange={(e) => setSpouseSecondLanguageScore(parseInt(e.target.value))} />
          </>
        )}

        <label htmlFor="spouse-canadian-work-experience">Spouse's Canadian work experience (in years)</label>
        <input type="number" id="spouse-canadian-work-experience" value={spouseCanadianWorkExperience} onChange={(e) => setSpouseCanadianWorkExperience(parseInt(e.target.value))} />

        <button onClick={handleCalculate}>Calculate</button>

        {score > 0 && (
          <div className="result">
            Your CRS score is <span>{score}</span>.
          </div>
        )}
    </form>
</div>
);
        }
export default App;