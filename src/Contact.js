// import React from 'react';

import { Link } from 'react-router';
import React, { Component } from 'react';


// const Contact = (props) => {
//
//   return (
//
//       <Link to={`/profile/${props.id}`} className="contact-link">
//         <li className="contact">
//           <div className="image-cropper">
//             <img src={props.avatar} alt="avatar"/>
//           </div>
//           <div className="contact-info">
//             <h2>{props.name}</h2>
//             {props.occupation}
//           </div>
//
//           <div>
//             <input className="btn-filled"
//               type="submit"
//               value=" Remove Contact "
//             />
//           </div>
//
//         </li>
//
//
//       </Link>
//
//   );
// }

class Contact extends Component {

  render() {
    return (
      <div>
        <Link to={`/profile/${this.props.id}`} className="contact-link">
          <li className="contact">
            <div className="image-cropper">
              <img src={this.props.avatar} alt="avatar"/>
            </div>
            <div className="contact-info">
              <h2>{this.props.name}</h2>
              {this.props.occupation}
            </div>
          </li>
        </Link>
        <button onClick={() => this.props.onDelete(this.props.id)}>Remove</button>
      </div>

    );
  }
};

Contact.propTypes = {
  id: React.PropTypes.string.isRequired,
  avatar: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  occupation: React.PropTypes.string.isRequired,
};

export default Contact;
