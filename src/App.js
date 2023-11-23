import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

class App extends Component {
  state = {
    SearchInput: '',
    NameInput: '',
    PasswordInput: '',
    InitialList: [],
    isShow: false,
  }

  websiteInput = event => {
    this.setState({SearchInput: event.target.value})
  }

  NameInputValue = event => {
    this.setState({NameInput: event.target.value})
  }

  PasswordInputValue = event => {
    this.setState({PasswordInput: event.target.value})
  }

  addButton = () => {
    const {SearchInput, PasswordInput, NameInput} = this.state
    const newList = {
      id: v4(),
      website: SearchInput,
      name: NameInput,
      password: PasswordInput,
    }

    this.setState(prev => ({
      InitialList: [...prev.InitialList, newList],
      website: '',
      name: '',
      password: '',
      isTrue: true,
    }))
  }

  render() {
    const {SearchInput, NameInput, PasswordInput, InitialList} = this.state
    let {isTrue} = this.state
    const newList = InitialList.filter(each =>
      each.name.toLowerCase().includes(SearchInput.toLowerCase()),
    )
    const UpperCase = SearchInput[0].toUpperCase()

    if (newList.length === 0) {
      isTrue: false
    } else {
      isTrue: true
    }

    return (
      <div className="main-container">
        <div className="small-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="imagepassword"
          />
          <div className="card1">
            <div className="card-image-container">
              <div className="input-container">
                <h1 className="heading-password">Add New Password</h1>
                <div className="website-div">
                  <div className="web-image-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      className="website-image"
                    />
                  </div>
                  <hr className="hrz" />
                  <input
                    type="text"
                    className="web-input"
                    placeholder="Enter Your Website"
                    onChange={this.websiteInput}
                    value={SearchInput}
                  />
                </div>
                <div className="website-div">
                  <div className="web-image-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      className="website-image"
                    />
                  </div>
                  <hr className="hrz" />
                  <input
                    type="text"
                    className="web-input"
                    placeholder="Enter Your Name"
                    onChange={this.NameInputValue}
                    value={NameInput}
                  />
                </div>
                <div className="website-div">
                  <div className="web-image-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      className="website-image"
                    />
                  </div>
                  <hr className="hrz" />
                  <input
                    type="Password"
                    className="web-input"
                    placeholder="Enter Your Password"
                    onChange={this.PasswordInputValue}
                    value={PasswordInput}
                  />
                </div>
                <div className="btn-div">
                  <button
                    type="button"
                    className="button"
                    onClick={this.addButton}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                className="img-height"
              />
            </div>
          </div>
          <div className="card2">
            <div className="card-image-container2">
              <div className="pass">
                <h1 className="password-head">Your Password</h1>
                <p className="paragraph">0</p>
              </div>
              <div className="website-div2">
                <div className="web-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    className="website-image"
                  />
                </div>
                <hr className="hrz" />
                <input
                  type="search"
                  className="web-input2"
                  placeholder="Search"
                />
              </div>
            </div>
            <hr />

            {isTrue && (
              <ul>
                {newList.map(each => (
                  <li>
                    <div className="div-main-container">
                      <div className="div-container">
                        <p className="upper">{each}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {!isTrue && (
              <div className="result-container">
                <div className="one-more-img">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    className="img-height2"
                  />
                  <p className="password-head2">No Password</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
