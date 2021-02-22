<template>
  <div class="container resume">
      <h2>Experience</h2>
    <div class="columns is-multiline">
      <div class="column is-half" >
        <p>Field service engineer</p>
        <p>Colruytgroup</p>
        <p><time>10/2020</time>  - present</p>
      </div>
      <div class="column is-half">
        <p>UC Leuven-Limburg</p>
        <p>Job student ict support</p>
        <p><time>09/2018</time> - <time>01/2020</time></p>
      </div>
      <div class="column is-half">
        <p>Elmos</p>
        <p>Internship front-end devolopment Vue.js</p>
        <p><time>03/2020</time> - <time>06/2020</time></p>
      </div>
      <div class="column is-half">
        <p><a href="https://iswleuven.be/">Informatica studentenwerking</a></p>
        <p>Responsible internal operation</p>
        <p><time>10/2018</time> - <time>10/2019</time></p>
      </div>
      <div class="column is-half">
        <p>Den Brosser</p>
        <p>Job Student (bartender)</p>
        <p><time>06/2019</time> - <time>09/2020</time></p>
      </div>
       <div class="column is-half">
        <p><a href="https://iswleuven.be/">Informatica studentenwerking</a></p>
        <p>Junior counselor</p>
        <p><time>10/2017</time> - <time>10/2018</time></p>
      </div>
    </div>
    <h2>Education</h2>
    <div class="columns">
      <div class="column">
        <p>UC Leuven-Limburg</p>
        <p>IT- system and network management</p>
        <p><time>2016 - 2020</time></p>
      </div>
      <div class="column">
        <p>Heilg Hart Heverlee</p>
        <p>Accountency and IT</p>
        <time>2014 - 2016</time>
      </div>
    </div>
    <h2>Languages</h2>
      <ul class="resume_list">
        <li>Dutch - mother tongue</li>
        <li>English - advanced</li>
        <li>French - intermediate</li>
      </ul>
    <h2>Skills</h2>
    <div class="columns is-multiline">
      <div class="column is-one-quarter">
        <p>Automation:</p>
        <ul>
          <li>Ansible</li>
        </ul>
      </div>
      <div class="column is-one-quarter">
        <p>Linux:</p>
        <ul>
          <li>Ubuntu</li>
          <li>Fedora</li>
        </ul>
      </div>
      <div class="column is-one-quarter">
        <p>Networking:</p>
        <ul>
          <li>Cisco</li>
          <li>Juniper</li>
          <li>unifi</li>
          <li>Mikrotik</li>
        </ul>
      </div>
      <div class="column is-one-quarter">
        <p>Supervision:</p>
        <ul>
          <li>Checkmk</li>
          <li>Elk stack</li>
          <li>Grafana</li>
        </ul>
      </div>
      <div class="column is-one-quarter">
        <p>Scripting:</p>
        <ul>
          <li>Bash</li>
          <li>Pyhton</li>
          <li>Javascript</li>
        </ul>
      </div>
      <div class="column is-one-quarter">
        <p>Databases:</p>
        <ul>
          <li>Postgresql</li>
          <li>Mysql</li>
        </ul>
      </div>
      <div class="column is-one-quarter">
        <p>Containerization:</p>
        <ul>
          <li>Docker</li>
          <li>Docker swarm</li>
        </ul>
      </div>
      <div class="column is-one-quarter">
        <p>Technologies:</p>
        <ul>
          <li>Git</li>
          <li>Powerdns</li>
          <li>CI/CD</li>
          <li>DHCP</li>
          <li>Traefik</li>
          <li>Home assistant</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
};
</script>

<style>
h2{
  font-size: large;
  margin-bottom: 1em;
  font-weight: bold;
}
.resume {
  margin-top: 3em;
}
.resume_list {
  margin-bottom: 0.75em;
}

</style>
