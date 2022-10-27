import { RiAddCircleLine } from "react-icons/ri";

const Card = ({ question, children }) => {
  return (
    <div className="px-3 py-6 mb-4 bg-slate-100 rounded-md">
      <h4 className="font-semibold flex items-center gap-1 mb-2">
        <RiAddCircleLine />
        {question}
      </h4>
      <div className="pl-4">{children}</div>
    </div>
  );
};

const Blog = () => {
  return (
    <section className="px-2 md:px-6">
      <div className="sm:container mx-auto lg:max-w-4xl py-6 text-slate-700">
        <h2 className="font-serif font-bold text-xl">Blog post</h2>
        <div className="py-4">
          <Card question={"What is cors?"}>
            <p>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a 'preflight' request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </p>
          </Card>
          <Card
            question={
              "Why are you using firebase? What other options do you have to implement authentication?"
            }
          >
            <p>
              Firebase is a web app development platform created by Google. It
              lets us develop the whole app on the front-end without any
              server-side code. At the same time, it does let us set up some
              server-side logic via Firebase Functions if we need to react to
              certain events (creation of data or files, login, https requests)
              so we can send emails or push notifications or process the data
              after it is written.
            </p>
            <p>
              Other interesting free alternatives to Firebase are Supabase,
              RxDB, Etebase and remoteStorage.
            </p>
          </Card>
          <Card question={"How does the private route work?"}>
            <p>
              Private Routes in React Router (also called Protected Routes)
              require a user being authorized to visit a route (read: page). So
              if a user is not authorized for a specific page, they cannot
              access it. The most common example is authentication in a React
              application where a user can only access the protected pages when
              they are authorized (which means in this case being
              authenticated). Authorization goes beyond authentication though.
              For example, a user can also have roles and permissions which give
              a user access to specific areas of the application.
            </p>
          </Card>
          <Card question={"What is Node? How does Node work?"}>
            <p>
              Node.js is an open-source, cross-platform JavaScript runtime
              environment and library for running web applications outside the
              client's browser. Developers use Node.js to create server-side web
              applications, and it is perfect for data-intensive applications
              since it uses an asynchronous, event-driven model.
            </p>
            <p>
              Node.js incorporates the Google Chrome V8 JavaScript engine, which
              supports ECMAScript 2015 (ES6) syntax without any need for an
              ES6-to-ES5 transpiler such as Babel. It runs a single-threaded
              event loop registered with the system to handle connections, and
              each new connection causes a JavaScript callback function to fire.
              The callback function can handle requests with non-blocking I/O
              calls, and if necessary can spawn threads from a pool to execute
              blocking or CPU-intensive operations and to load-balance across
              CPU cores. Node's approach to scaling with callback functions
              requires less memory to handle more connections than most
              competitive architectures that scale with threads.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;
