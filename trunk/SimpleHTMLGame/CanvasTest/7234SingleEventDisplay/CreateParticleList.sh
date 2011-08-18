cat /home/fhead/Programs/pythia8/pythia8145/htmldoc/ParticleData.html | grep id | grep name | awk '{print $2, $3}' | sed "s#\"##g" | sed "s/id=//g" | sed "s/name=//g" > ParticleList
cat /home/fhead/Programs/pythia8/pythia8145/htmldoc/ParticleData.html | grep id | grep antiName | awk '{print $2, $4}' | sed "s/id=//g" | sed "s/antiName=//g" | sed "s/\"//g" | awk '{print '-' $1, $2}' > AntiParticleList

cat ParticleList AntiParticleList > TotalParticleList

File="7234ParticleNames.js"

echo "var ParticleName = new Object();" > $File
echo >> $File
echo "function CreateParticleNames()" >> $File
echo "{" >> $File
echo "   ParticleName.length = 0;" >> $File
echo >> $File
cat TotalParticleList | awk '{print "   ParticleName[\x27" $1 "\x27] = \x27" $2 "\x27;"}' >> $File
echo "}" >> $File

rm ParticleList AntiParticleList TotalParticleList






