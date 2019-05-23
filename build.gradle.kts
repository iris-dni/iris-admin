plugins {
  base
  id("com.lovelysystems.gradle") version ("1.2.0")
}

lovely {
    gitProject()
    dockerProject("lovelysystems/iris-admin")
}

val writeVersion by tasks.creating {
    val out = file("VERSION.txt")
    outputs.file(out)
    out.writeText(project.version.toString())
}

/**
 * Prepare files for the docker build
 */
with(lovely.dockerFiles) {
  from(".") {
    include(
      "app/**",
      "public/**",
      "jsconfig.json",
      "package.json",
      "typings.json",
      "webpack.config.js"
    )
    exclude(
      "public/bundle.js",
      "public/bundle.js.map",
      "public/settings.js"
    )
  }
  from(writeVersion.outputs)
}