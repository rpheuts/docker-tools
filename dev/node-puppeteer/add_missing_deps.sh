# Loop through and install missing dependencies.
while true
do
    # Loop through each of the missing libraries for this round.
    ldd ${1}/chrome 2>&1 | grep -e "no version information" -e "not found" | while read -r line
    do
        if [[ $line == *"/"* ]]; then
            # Extract the filename when a path is present (e.g. /lib64/).
            file=`echo $line | sed 's>.*/\([^/:]*\):.*>\1>'`
        else
            # Extract the filename for missing libraries without a path.
            file=`echo $line | awk '{print $1;}'`
        fi
        # We'll require an empty round before completing.
        finished=false

        echo "Finding dependency for ${file}"

        # Find the URL for the Centos 7 RPM containing this library.
        url=$(repoquery --repofrompath=centos,http://mirror.centos.org/centos/7/os/`arch` \
            --repoid=centos -q --qf="%{location}" --whatprovides $file | \
            sed s/x86_64.rpm$/`arch`.rpm/ | \
            sed s/i686.rpm$/`arch`.rpm/g
        )

        # Download the RPM.
        wget "${url}" -O ${file}.rpm

        # Extract it and remove it.
        rpm -iUvh --nodeps ${file}.rpm
        rm ${file}.rpm
    done

    # Break once no new files have been copied in a loop.
    if [[ $(ldd ${1}/chrome 2>&1 | grep -e "no version information" -e "not found" | head -c1 | wc -c) -eq 0 ]]; then
        break
    fi
done
