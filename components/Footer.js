import Link from "next/link";

export default function Footer() {
  return (
    <>
      <hr className="base-container mt-16" />
      <div className="base-container mb-16 flex justify-between">
        <div>
          <p className="mt-6 text-gray-600">
            Twitter <a className="a-link" href="https://twitter.com/phatnhse">@phatnhse</a>
          </p>
          <p className="text-gray-600">
            Github <a className="a-link" href="https://github.com/phatnhse/">@phatnhse</a>
          </p>
          <p className="text-gray-600">
            Gmail <a className="a-link" href={"mailto:phatnhse@email.com"}>@phatnhse</a>
          </p>
        </div>

        <p className="text-sm mt-8">© 2021 Nóng Quá Nóng. All Rights Reserved.</p>
      </div>
    </>
  )
}