---
layout: post
title: Flake it till you make it
subtitle: 000
---

Under what circumstances should we step off a path? When is it essential that we finish what we start? If I bought a bag of peanuts and had an allergic reaction, no one would fault me if I threw it out. If I ended a relationship with a woman who hit me, no one would say that I had a commitment problem. But if I walk away from a seemingly secure route because my soul has other ideas, I am a flake?

The truth is that no one else can definitively know the path we are here to walk. It’s tempting to listen—many of us long for the omnipotent other—but unless they are genuine psychic intuitives, they can’t know. All others can know is their own truth, and if they’ve actually done the work to excavate it, they will have the good sense to know that they cannot genuinely know anyone else’s. Only soul knows the path it is here to walk. Since you are the only one living in your temple, only you can know its scriptures and interpretive structure.

At the heart of the struggle are two very different ideas of success—survival-driven and soul-driven. For survivalists, success is security, pragmatism, power over others. Success is the absence of material suffering, the nourishing of the soul be damned. It is an odd and ironic thing that most of the material power in our world often resides in the hands of younger souls. Still working in the egoic and material realms, they love the sensations of power and focus most of their energy on accumulation. Older souls tend not to be as materially driven. They have already played the worldly game in previous lives and they search for more subtle shades of meaning in this one—authentication rather than accumulation. They are often ignored by the culture at large, although they really are the truest warriors.

## Calculate Days

<label for="startDate">Start Date:</label>
<input type="date" id="startDate" value="2020-01-01">

<label for="endDate">End Date:</label>
<input type="date" id="endDate">

<button onclick="calculateDays()">Calculate Days</button>

<p id="result"></p>

<script>
  function calculateDays() {
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    if (isNaN(startDate) || isNaN(endDate)) {
      alert('Please enter valid dates.');
      return;
    }

    var timeDiff = endDate - startDate;
    var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    document.getElementById('result').innerHTML = 'Number of days: ' + daysDiff;
  }
</script>
