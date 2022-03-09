
function joinPaths (...segments) {
  let joined = segments
    .map((segment) => segment.replace(/^\/|\/$/g, ''))
    .filter(Boolean)
    .join('/')

  const first = segments[0]
  const last = segments[segments.length - 1]

  if (first[0] === '/') joined = `/${joined}`
  if (last[last.length - 1] === '/') joined = `${joined}/`

  return joined
}

module.exports = joinPaths
