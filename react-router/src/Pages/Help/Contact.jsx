import { Form, redirect, useActionData } from "react-router-dom";

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log(submission);
  //send post request
  if (submission.message.length < 10) {
    return { error: "Message too short" };
  }
  //redirect to home
  return redirect("/");
};

export default function Contact() {
  const data = useActionData();
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      {
        //treditional approach
        /* <form>
        <label>
          <span>Your email: </span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message: </span>
          <textarea name="message" required />
        </label>
        <button>Submit</button>
      </form> */
      }
      {/* new approach */}
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email: </span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message: </span>
          <textarea name="message" required />
        </label>
        <button>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}
