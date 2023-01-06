/**
 * NOTES:
 * 1. Steps up hill marked as U
 * 2. Steps downhill marked as D
 * 3. Hikes start and end at sea level
 * 4. Step up and step down represents 1
 * 5. Mountain, steps above sea level
 * 6. Valley, steps below sea level
 * 7.
 */

function countValleys(steps, path) {
  let valleyCount = 0;
  let distance = 0;

  for (let i = 0; i < steps; i++) {
    path.charAt(i) === "U" ? distance++ : distance--;
    path.charAt(i) === "U" && distance == 0 ? valleyCount++ : null;
  }

  console.log(valleyCount);
}

countValleys(12, "DDUUDDUDUUUD");
