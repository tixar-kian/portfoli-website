import React, { Component } from 'react';
import SkillBar from 'react-skillbars';

class Resume extends Component {
  //b:#525252,t:#333333
  //b:#4288d0,t:#124e8c
  SKILLS = [
    {
      "type": "Java",
      "level": 90,
      "color": {
        "bar": "#cc0001",
        "title": {
          "text": "#fff",
          "background": "#cc0001"
        }
    }},
    {
      "type": "Springboot",
      "level": 80,
      "color": {
        "bar": "#2ecc71",
        "title": {
          "text": "#fff",
          "background": "#27ae60"
        }
      }
    },
    {
      "type": "Python",
      "level": 75,
      "color": {
        "bar": "#ffde59",
        "title": {
          "text": "#fff",
          "background": "#FCC107"
        }
      }
    },
    {
      "type": "SQL",
      "level": 90,
      "color": {
        "bar": "#5a68a5",
        "title": {
          "text": "#fff",
          "background": "#46465e"
        }
      }
    },
    {
      "type": "Snowflake",
      "level": 75,
      "color": {
        "bar": "#2cb6e7",
        "title": {
          "text": "#fff",
          "background": "#2cb6e7"
        }
      }
    },
    {
      "type": "StreamSets",
      "level": 60,
      "color": {
        "bar": "#1f398f",
        "title": {
          "text": "#fff",
          "background": "#1f398f"
        }
      }
    },
    {
      "type": "AWS",
      "level": 50,
      "color": {
        "bar": "#fca326",
        "title": {
          "text": "#111",
          "background": "#fc6d26"
        }
      }
    },
    {
      "type": "Javascript",
      "level": 50,
      "color": {
        "bar": "#525252",
        "title": {
          "text": "#fff",
          "background": "#333333"
        }
      }
    },
    {
      "type": "React",
      "level": 30,
      "color": {
        "bar": "#00d8ff",
        "title": {
          "text": "#fff",
          "background": "#0eb9d8"
        }
      }
    }
  ]

  
  render() {
    if(this.props.data){
    var description=this.props.data.description;
    }
    return (
      <section id="resume">
      <div className="row skill">
      <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>
         <div className="nine columns main-col">
         <p style={{color:"white"}}>{description}</p>
			</div>
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
				<div className="bars">
        <SkillBar skills={this.SKILLS} height={26}> </SkillBar>	</div>
			</div>
      </div>
   </section>
      
    );
  }
}


export default Resume;
