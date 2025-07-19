import { useState } from "react";
import ProfileHeading from "../components/ProfileHeading";
import { toast } from "react-toastify";
import { callAuthenticatedApi } from "../utils/api/Authentication";

function ProfilePage() {
  type Gender = "Male" | "Female" | "NonBinary" | "Other";
  type Role = "Planner" | "Organiser" | "Admin";
  type County =
    | "Greater London"
    | "West Midlands"
    | "West Yorkshire"
    | "Merseyside"
    | "Lancashire"
    | "Kent"
    | "Essex"
    | "Surrey"
    | "Berkshire"
    | "Hampshire";

  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [gender, setGender] = useState<Gender>("Male");
  const [role, setRole] = useState<Role>("Planner");
  const [county, setCounty] = useState<County>("West Yorkshire");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");

  const handleCreateProfile = () => {
    callAuthenticatedApi("http://localhost:5133/api/Planner", "POST", {
      displayName,
      firstName,
      lastName,
      dob,
      emailAddress: "aliceparker@email.com",
      telephoneNumber,
      status: 1,
      role: 1,
    })
      .then((data) => {
        console.log("Profile created successfully:", data);
        toast.success("Profile created successfully");
      })
      .catch((error) => {
        console.error("Profile creation failed:", error.message);
        toast.error(
          "An error occurred during profile creation. Please try again later."
        );
      });
  };
  
  

    return (
      <div className="">
        <ProfileHeading />
        <b className="h5 site-color">Profile Settings</b>

        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <label className="form-label">Display Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Display Name"
              aria-label="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              aria-label="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Display Name"
              aria-label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
              aria-label="Email Address"
              readOnly={true}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Telephone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Telephone Number"
              aria-label="Telephone Number"
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <select
              id="inputState"
              className="form-select"
              value={gender}
              onChange={(e) => setGender(e.target.value as Gender)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="NonBinary">Non-Binary</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Role</label>
            <select
              id="inputState"
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
            >
              <option value="Planner">Planner</option>
              <option value="Organiser">Organiser</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Address 1</label>
            <input
              type="text"
              className="form-control"
              placeholder="Building, House, Apartment No."
              aria-label="Building, House, Apartment No."
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Address 2</label>
            <input
              type="text"
              className="form-control"
              placeholder="Street Name"
              aria-label="Street Name"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">County</label>
            <select
              id="inputState"
              className="form-select"
              value={county}
              onChange={(e) => setCounty(e.target.value as County)}
            >
              <option value="Greater London">Greater London</option>
              <option value="West Midlands">West Midlands</option>
              <option value="West Yorkshire">West Yorkshire</option>
              <option value="Merseyside">Merseyside</option>
              <option value="Lancashire">Lancashire</option>
              <option value="Kent">Kent</option>
              <option value="Essex">Essex</option>
              <option value="Surrey">Surrey</option>
              <option value="Berkshire">Berkshire</option>
              <option value="Hampshire">Hampshire</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              placeholder="City"
              aria-label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Post code</label>
            <input
              type="text"
              className="form-control"
              placeholder="Post Code"
              aria-label="Post Code"
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn mt-4" onClick={handleCreateProfile}>
          Continue
        </button>
      </div>
    );
  };


export default ProfilePage;
