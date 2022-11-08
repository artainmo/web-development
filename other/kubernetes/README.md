# Kubernetes

## Table of contents
- [edX course - Introduction to Kubernetes](#edX-course---Introduction-to-Kubernetes)
  - [From Monolith to Microservices](#From-Monolith-to-Microservices)
  - [Container Orchestration](#Container-Orchestration)
  - [Kubernetes-introduction](#Kubernetes-introduction)
  - [Kubernetes-Architecture](#Kubernetes-Architecture)
  - [Installing-kubernetes](#Installing-kubernetes)
    - [Minikube - Installing local kubernetes-clusters](#minikube---installing-local-kubernetes-clusters)
  - [Interact-with-kubernetes](#Interact-with-kubernetes)
  - [Create Kubernetes Objects](#Create-Kubernetes-Objects)
    - [Pod](#Pod)
    - [Deployment controller](#Deployment-controller)
    - [Service](#Service)
    - [Liveness and Readiness probe](#Liveness-and-Readiness-probe)
  - [ConfigMaps and Secrets](#ConfigMaps-and-Secrets)
  - [Volume-management](#Volume-management)
  - [Ingress](#Ingress)
  - [Advanced topics](#Advanced-topics)
    - [Annotations](#Annotations)
    - [Quotas](#Quotas)
    - [Autoscaling](#Autoscaling)
    - [Helm](#Helm)
- [Free tutorials](#Free-tutorials)
  - [Ancient related notes](#Ancient-related-notes) 
- [Resources](#Resources)

## edX course - Introduction to Kubernetes
### From Monolith to Microservices
A **monolith** application runs as a single process and thus runs on one hardware and scaling individual features of the monolith is almost impossible. To scale the application another instance of the monolith has to be deployed on another server, typically behind a load balancing appliance. During upgrades, patches or migrations of the monolith application downtime is inevitable.

When using **microservices**, complex applications are composed of small independent processes which communicate with each other through APIs over a network. Microservices can be deployed individually on separate servers provisioned with fewer resources.<br>
Although the distributed nature of microservices adds complexity to the architecture, one of the greatest benefits of microservices is scalability. With the overall application becoming modular, each microservice can be scaled individually.<br>
Another benefit is no downtime during upgrades, patches, migrations. This is because one microservice at a time is updated, instead of having to re-compile, re-build and re-start an entire monolithic application. As a result, businesses are able to make updates a lot faster, having separate teams focusing on separate features, thus being more productive and cost-effective.

Refactoring is intended to improve the design, structure, and/or implementation of the software, while preserving its functionality. Refactoring is necessary when transforming a monolith application into a microservices application.

### Container Orchestration
**Containers** are best suited to deliver microservices by providing fast, portable, isolated virtual environments for applications to run without interference from other running applications.<br>
**Microservices** are lightweight applications written in various modern programming languages, with specific dependencies, libraries and environmental requirements.<br>
Containers encapsulate microservices and their dependencies but do not run them directly. Containers run container images. A container image bundles the application along with its runtime, libraries, and dependencies, and it represents the source of a container deployed to offer an isolated executable environment for the application.

**Container orchestrators** are tools which group systems/micro-services/containers together to form clusters where containers' deployment and management is automated at scale. Management consists of handling; on-demand-scalability, optimal resource usage, updates without downtime, fault-tolerance, accessibility from outside the container, communication with other containers from same cluster.

Different container orchestration tools exist, such as; kubernetes, Amazon Elastic Container Service (only on AWS), Docker Swarm, Azure Container Instances, Nomad...<br>
In this course, we will explore Kubernetes, one of the most in-demand container orchestration tools available today.<br>
Kubernetes as a Service (KaaS) makes it possible to operate Kubernetes, the world's most popular container orchestrator, as a managed service. KaaS services are commonly provided in the public cloud, such as Amazon Elastic Kubernetes Service (Amazon EKS) for AWS, Azure Kubernetes Service (AKS), DigitalOcean Kubernetes, Google Kubernetes Engine (GKE), IBM Cloud Kubernetes Service, Oracle Container Engine for Kubernetes, or VMware Tanzu Kubernetes Grid...

### Kubernetes introduction
Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications.<br>
Kubernetes is also referred to as k8s (pronounced Kate's), as there are 8 characters between k and s.<br>
Kubernetes was started by Google and, with its v1.0 release in July 2015, Google donated it to the Cloud Native Computing Foundation (CNCF), one of the largest sub-foundations of the Linux Foundation.

Kubernetes offers a very rich set of features for container orchestration, such as:
* Automatic bin packing. Kubernetes automatically plans containers based on resource needs and constraints.
* Extensibility. A Kubernetes cluster can be extended with new custom features without modifying the upstream source code. Kubernetes extensibility allows it to support and to be supported by many 3rd party open source tools which enhance Kubernetes' capabilities. It's architecture is modular and pluggable.
* Self-healing. It terminates and then restarts containers that become unresponsive to health checks.
* Horizontal scaling. With Kubernetes applications are scaled manually or automatically based on CPU or custom metrics utilization.
* Service discovery and load balancing. Containers receive IP addresses from Kubernetes, while it assigns a single Domain Name System (DNS) name to a set of containers to aid in load-balancing (In computing, load balancing is the process of distributing a set of tasks over a set of resources, with the aim of making their overall processing more efficient.) requests across the containers of the set.
* Portability. It can be deployed in many environments such as local or remote Virtual Machines, bare metal, or in public/private/hybrid/multi-cloud setups. 

### Kubernetes Architecture
Kubernetes consists of nodes, we can make distinction between 'control plane nodes' and 'worker nodes'.

The **control plane node** provides a running environment for the control plane agents responsible for managing the state of a Kubernetes cluster, and it is the brain behind all operations inside the cluster.<br>
In order to communicate with the Kubernetes cluster, users send requests to the control plane via a Command Line Interface (CLI) tool, a Web User-Interface (Web UI) Dashboard, or an Application Programming Interface (API).

A **worker node** provides a running environment for client applications. Through containerized microservices, these applications are encapsulated in Pods, controlled by the cluster control plane agents running on the control plane node.<br>
A **Pod** is the smallest scheduling work unit in Kubernetes. It is a logical collection of one or more containers scheduled together, and the collection can be started, stopped, or rescheduled as a single unit of work.<br>
The network traffic between client users and the containerized applications deployed in Pods is handled directly by the worker nodes, and is not routed through the control plane node.<br>
Kubernetes requires a container runtime, such as docker, on the node where a Pod and its containers are to be scheduled.

Kubernetes enables external accessibility, exposing a container to the cluster or even the outside world, through **Services**. It works with the involvement of the kube-proxy node agent, IP tables, routing rules, cluster DNS server, all collectively implementing a micro-load balancing mechanism that exposes a container's virtual IP address and dedicated port number.

Examples of **Kubernetes object** types are Nodes, Namespaces, Pods, ReplicaSets, Deployments, DaemonSets...<br>

We can partition the cluster into virtual sub-clusters using **Namespaces**. The names of the resources/objects created inside a Namespace are unique, but not across Namespaces in the cluster.<br>
It is good practice to use Namespaces to virtualize the cluster and isolate users, developer teams, applications, or tiers.<br>
Generally, Kubernetes creates four Namespaces by default:
* kube-system, contains control plane agents or other objects created by kubernetes.
* default, contains the objects and resources created by developers.
* kube-public, contains objects that are readable by anyone, used to expose public information about the cluster.
* kube-node-lease, holds node lease objects used for node heartbeat data.

**Controllers** handle pods' replication, fault tolerance, self-healing, etc. Examples of controllers are Deployments, ReplicaSets, DaemonSets, Jobs, etc.<br>
A **ReplicaSet** ensures a specified number of replicas of a Pod is running at any given time, thus it can scale and heal pods.
**Deployments** are the recommended controllers for the orchestration of Pods, they manage the creation, deletion, and updates of Pods. A 'Deployment' automatically creates a ReplicaSet, which then creates a Pod. There is no need to manage ReplicaSets and Pods separately, the 'Deployment controller' will manage them on our behalf.

**Labels** are key-value pairs attached to Kubernetes objects, they are used to organize/categorize objects and enable the selection of a subset of objects. Labels do not provide uniqueness to objects.<br>
Label selectors are used by collectors or services to select a subset of objects. Equality-Based-Selectors allow filtering of objects based on Label keys and values while Set-Based-Selectors allow filtering of objects based on a set of values.

**Liveness Probe** checks on an application's health, and if the health check fails, kubelet restarts the affected container automatically.

In certain instances applications have to meet certain conditions before they can be deployed. Such as ensuring that depending services are available, datasets are loaded, etc... In such cases we use **Readiness Probes** to wait until all conditions are met before the application serves traffic.

### Installing kubernetes
Kubernetes can be installed using different cluster configurations, such as:
* **All-in-One Single-Node Installation**. In this setup, all the control plane and worker components are installed and running on a single-node. While it is useful for learning, development, and testing, it is not recommended for production purposes.
* **Single-Control Plane and Multi-Worker Installation**. In this setup, we have a single-control plane node. Multiple worker nodes can be managed by the control plane node.
* **Multi-Control Plane and Multi-Worker Installation**. In this setup, we have multiple control plane nodes configured for High-Availability (HA). Multiple worker nodes can be managed by the HA control plane. High-availability means if one node fails another node is ready to take over its job, thus avoiding unavailability.
* As an additional note, **etcd** is a strongly consistent, distributed key-value store that provides a reliable way to store data that needs to be accessed by a distributed system or cluster of machines. An etcd instance can run inside a control plane or outside of it, it can also be configured for HA. An external etcd topology, where the data store is provisioned on a dedicated separate host, reduces the chances of an etcd failure as does HA.<br>
For production environments HA is recommended both on control-plane-nodes and on external etcd instances, such a configuration would be called **Multi-Control Plane with Multi-Node etcd, and Multi-Worker Installation**.

There are a variety of installation tools allowing us to deploy Kubernetes clusters on our local workstations, for learning and development purposes, such as: minikube, docker desktop (only in the case of containers made with docker), microK8s (for local and development but also cloud and production), K3S (lightweight Kubernetes cluster both for local and cloud).

For automatically setting up a kubernetes cluster tools can be used such as; kubeadm (the officially supported tool), kubespray, kops and previously covered KaaS products.<br>
However to manually set up a kubernetes cluster, here is a good resource ([Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)).

#### Minikube - Installing local kubernetes clusters
Minikube is one of the easiest, most flexible and popular methods to run a Kubernetes cluster, isolated by Virtual Machines (VM) or Containers, run directly on our local workstations. It initializes for us a fully functional, non-production, Kubernetes cluster extremely convenient for learning purposes.

Minikube is able to make changes in host environment, this is why we prefer to isolate it from the host environment, by launching it inside an external driver such as a virtual machine or by using a type-2-hypervisor or container runtime. <br>
For a learning environment the recommendations are that a Kubernetes node has 2 CPU cores (or virtual CPUs) at a minimum, at least 2 GB of RAM memory (with 4 - 6 GB of RAM recommended for optimal usage), and 20+ GB of disk storage space.<br>
Following the nodes' provisioning phase, Minikube invokes kubeadm, to bootstrap the Kubernetes cluster components inside the previously provisioned nodes.

Installion of minikube, and the external driver you choose to use, depend upon your operating system.

In a terminal we can start Minikube with the `minikube start` command, that bootstraps a single-node cluster with the latest stable Kubernetes version release. It will select a default external driver based on what is available on host environment. It creates an object that describes our cluster, named profile, which can be used to relaunch the same cluster. To start a customized cluster the command can take additional flags.<br>
The `minikube profile` command allows us to view the status of all our clusters.<br>
With the `minikube status` command, we display the status of the Minikube cluster.<br>
With the `minikube stop` command, we can stop Minikube.<br>
List all the nodes with `minikube node list` and use `-p` flag (p from profile) to specify the cluster.<br>
With the `minikube ip` command, we get the ip address of the control-plane-node, to specify another node use the `--node` flag.<br>
Use `minikube delete` to remove a cluster, specify the cluster with `-p`.

A Minikube installation has its own kubectl CLI installed and ready to use. However, it is somewhat inconvenient to use as the kubectl command becomes a subcommand of the minikube command. Users would be required to type longer commands, such as `minikube kubectl <subcommands>`, instead of just `kubectl <subcommands>`. While a simple solution would be to set up an alias, the recommendation is to run the kubectl CLI tool as a standalone installation.<br>
Once kubectl is installed, we can display information about the Minikube Kubernetes cluster with the `kubectl cluster-info` command.

By default minikube disables the 'Kubernetes dashboard'. It can be enabled by using the following commands:
<pre>
minikube addons enable metrics-server
minikube addons enable dashboard
</pre>
Subsequently the command `minikube dashboard` can be used to open in browser the kubernetes dashboard.

To access the application go to minikube's ip. Find it with this command `minikube ip`.

### Interact with kubernetes
A kubernetes cluster is accessible through; command-line-interface (CLI) scripts/tools, web-based-user-interfaces, APIs from CLI or programmatically.<br>
**kubectl** is the Kubernetes CLI client to manage clusters. It can be used in scripts to automate.<br>
The **Kubernetes Dashboard** provides a Web-based User Interface (Web UI) to interact with a Kubernetes cluster. It is not as flexible as kubectl CLI but simpler to use.<br>
We can access the **API** server running on the control plane node either directly by calling the respective API endpoints, using the CLI tools, or the Dashboard UI.

Use the `kubectl proxy` command to authenticate with the API server in the control-plane-node, this makes the API service available on a given ip address usually with port '8001'. Now we can make HTTP requests to the API, from the CLI with 'curl' for example. A simple get request returns us all the possible endpoints.<br>
Alternatively we can authenticate to the API by providing a 'Bearer Token' when issuing a curl, or by providing a set of 'keys' and 'certificates'.<br>
It is possible to use modules for authentication and authorization, allowing us to customize authentication, authorization, and access control stages of the Kubernetes API access.

### Create Kubernetes Objects
To add objects in cluster use `kubectl apply -f <filename>.yaml`, subsequently `kubectl get <pods/deployments/services>` can be used to view the new running pod/deployment/service.<br>
The object can be deleted with `kubectl delete -f <filename>.yaml`. When deleting an object that was responsible for the creation of other objects, those other objects will be deleted too.

To visualize the created objects in detail use `kubectl describe service/deployment/pod name`.

#### Pod
First create a .yaml file. Here is an example of a stand-alone Pod object's definition that such a file could contain:
<pre>
apiVersion: v1            
kind: Pod
metadata:                 #metadata, holds the object's name and optional labels and annotations.
  name: nginx-pod
  labels:
    run: nginx-pod
spec:                     #spec, marks the beginning of the block defining the desired state of the Pod object
  containers:
  - name: nginx
    image: nginx:1.20.2   #nginx:1.20.2, is used as image to run our single container. This image gets pulled from docker hub.
    ports:
    - containerPort: 80
</pre>

#### Deployment controller
Here is an example of a .yaml file for a Deployment controller:
<pre>
apiVersion: apps/v1               #apiVersion, specifies the API endpoint on the API server which we want to connect to.
kind: Deployment
metadata:                         #metadata, holds the object's basic information, such as name, annotations, labels, namespaces, etc.
  name: nginx-deployment
  labels:
    app: nginx-deployment
spec:                             #spec marks the beginning of the block defining the desired state of the Deployment controller object.
  replicas: 3
  selector:
    matchLabels:
      app: nginx-deployment
  template:                       #Here we create the 3 (because 3 replicas) running pods.
    metadata:
      labels:
        app: nginx-deployment
    spec:                         #This second spec (spec.template.spec) specifies the desired state of the 3 pods contained in the controller.
      containers:
      - name: nginx
        image: nginx:1.7.9
        ports:
        - containerPort: 80
</pre>
Here a new Deployment creates a ReplicaSet which then creates 3 Pods, with each Pod Template configured to run one nginx:1.7.9 container image.

#### Service
The following is an example of a Service object definition:
<pre>
apiVersion: v1
kind: Service
metadata:
  name: frontend-svc
spec:
  selector:
    app: frontend
  ports:
  - protocol: TCP
    port: 80
    targetPort: 5000
  externalIPs:
    - 80.11.12.10
</pre>
In this example, we are creating a frontend-svc Service by selecting all the Pods that have the Label key=app set to value=frontend.<br>
By default, each Service receives an IP address routable only inside the cluster, known as ClusterIP. The user/client now connects to a Service via its ClusterIP, which forwards traffic to one of the Pods attached to it. A Service provides load balancing by default while selecting the Pods for traffic forwarding.<br>
As soon as the Pod starts on any worker node, the kubelet daemon running on that node adds a set of environment variables in the Pod for all active Services. For example, if we have an active Service called redis-master, which exposes port 6379, and its ClusterIP is 172.17.0.6, then, on a newly created Pod, we can see the following environment variables: REDIS_MASTER_SERVICE_HOST=172.17.0.6, REDIS_MASTER_SERVICE_PORT=6379, REDIS_MASTER_PORT=tcp://172.17.0.6:6379.<br>
With the property 'ServiceType' we can define an access scope for the service, meaning the service is accessible only from inside the cluster ('ClusterIP' is default value) or from outside ('NodePort') or both from inside and outside ('LoadBalancer').<br>
If there are external IPs that route to one or more cluster nodes, Kubernetes Services can be exposed on those 'externalIPs'. Traffic that ingresses into the cluster with the external IP (as destination IP), on the Service port, will be routed to one of the Service endpoints. 'externalIPs' are not managed by Kubernetes.

A more direct method of creating a Service is by exposing the previously created Deployment. Like this for example `kubectl expose deployment nameDeployment --name=web-service --type=NodePort`. 

#### Liveness and Readiness probe
<pre>
...
livenessProbe:
       httpGet:                  
         path: /healthz
         port: 8080
         httpHeaders:
         - name: X-Custom-Header
           value: Awesome
       initialDelaySeconds: 3     #The initialDelaySeconds parameter requests the kubelet to wait for 3 seconds before the first check.
       periodSeconds: 3           #The existence of /healthz is configured to be checked every 3 seconds.
...
</pre>
The kubelet sends the HTTP GET request to the /healthz endpoint of the application, on port 8080. If that returns a failure, then the kubelet will restart the affected container, otherwise, it would consider the application to be alive.

<pre>
...
livenessProbe:
  tcpSocket:
    port: 8080
  initialDelaySeconds: 15
  periodSeconds: 20
...
</pre>
With TCP Liveness Probe, the kubelet attempts to open the TCP Socket to the container which is running the application. If it succeeds, the application is considered healthy, otherwise the kubelet would mark it as unhealthy and restart the affected container.

Readiness probes are defined in the same way as Liveness probes, only 'livenessProbe' has to be switched with 'readinessProbe' obviously.

### ConfigMaps and Secrets
Docker images can take runtime parameters, those parameters can configure the docker image, allowing the use of one image in different ways. The **ConfigMap API resource** can be used for setting up runtime parameters. If those runtime parameters hold sensitive information we can use the **Secret API resource** instead.

**ConfigMaps** allow us to decouple the configuration details from the container image. Using ConfigMaps, we pass configuration data as key-value pairs.<br>
A configmap can be created like this `kubectl create configmap <name> --from-literal=<key1>=<value1> --from-literal=<key2>=<value2>` and visualized like this `kubectl get configmaps <name> -o yaml`. Alternatively we can create a configmap from a file, which is easier when our configuration contains a lot of key-value pairs. It is done like this `kubectl create configmap <name> --from-file=<filepath>`, whereby the file contains one key-value pair (key=value) per line.<br>
Inside a Container, we can retrieve the key-value data of an entire ConfigMap or the values of specific ConfigMap keys as environment variables.
<pre>
...
  containers:
  - name: myapp-full-container
    image: myapp
    envFrom:
    - configMapRef:
      name: full-config-map        #the myapp-full-container's environment variables receive the values of the 'full-config-map' ConfigMap keys.
...
</pre>

Sometimes containers want to take parameters that hold sensitive information such as a database password for example. In this scenario, the **Secret** object can help by allowing us to encode the sensitive information before sharing it.<br>
We can create a secret object like this `kubectl create secret generic <name> --from-literal=<key1>=<value1>` and visualize it like this `kubectl describe secret <name>`. Alternatively we can create a secret object from a file by encrypting values (`echo mysqlpassword | base64`) into a file (`echo -n 'bXlzcWxwYXNzd29yZAo=' > password.txt`) and using this command `kubectl create secret generic <name> --from-file=<filepath>`.<br>
Inside a container we can retrieve the key-value data from a secret as environment variables.
<pre>
....
spec:
  containers:
  - image: wordpress:4.7.3-apache
    name: wordpress
    env:
    - name: WORDPRESS_DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: my-password
          key: password            #we reference only the 'password' key of the 'my-password' secret and assign its value to the 'WORDPRESS_DB_PASSWORD' environment variable.
....
</pre>

As explained in the 'Volume management' section, datas from configMaps and secrets not only can be accessed through environment variables but also via Volumes.
<pre>
....
spec:
  containers:
  - image: wordpress:4.7.3-apache
    name: wordpress
    volumeMounts:
    - name: secret-volume
      mountPath: "/etc/secret-data"
      readOnly: true
  volumes:
  - name: secret-volume
    secret:
      secretName: my-password
....
</pre>

### Volume management
When a container, containing data, stops running, by default it will lose all that data. To maintain that data, for it to be available once the container is started again, it has to be stored. Kubernetes uses **Volumes** of several types to store/maintain data outside the application container, so that when the container stops, the data is not lost.<br>
In Kubernetes, a Volume is linked to a Pod and can be shared among the containers of that Pod. Although the Volume has the same life span as the Pod, meaning that it is deleted together with the Pod, the Volume outlives the containers of the Pod, this allows data to be preserved across container restarts.

Volume types:
* persistentVolumeClaim
  * We can attach a PersistentVolume to a Pod using a persistentVolumeClaim. Persistent volume allows data to be maintained even after the container stops. This is the type most commonly used.
* gcePersistentDisk, awsElasticBlockStore, azureDisk
  * Allows to mount a Google Compute Engine (GCE) persistent disk, AWS EBS Volume, Microsoft Azure Data Disk into a Pod. Those are like persistent volumes but from third party services.
* emptyDir
  * If the Pod is terminated, the associated datas are deleted. In the end it comes down to the same as not setting up Volumes.
* hostPath
  * Allows to share data storage between the host and the Pod. If the Pod is terminated, the content of the Volume is still available on the host.
* configMap
  * With configMap objects, we can provide configuration data, or shell commands and arguments into a Pod. Our configMap key-value pairs basically get stored inside a persistent volume associated to a container.
* secret
  * With the secret Volume Type, we can pass sensitive information, such as passwords, to Pods.

A volume is created, similar to all other kubernetes objects, inside a .yaml file.

### Ingress
An Ingress is a collection of rules that allow incoming connections to reach the cluster Services.<br>
With Ingress, users do not connect directly to a Service. Users reach the Ingress endpoint, and, from there, the request is forwarded to the desired Service according to the ingress' defined rules.

A service acts as one endpoint that can forward requests to different pods and an ingress acts as one endpoint that can forward requests to different services.

<pre>
apiVersion: networking.k8s.io/v1 
kind: Ingress
metadata:
  name: virtual-host-ingress
  namespace: default
spec:
  rules:
  - host: blue.example.com
    http:
      paths:
      - backend:
          service:
            name: webserver-blue-svc
            port:
              number: 80
        path: /
        pathType: ImplementationSpecific
  - host: green.example.com
    http:
      paths:
      - backend:
          service:
            name: webserver-green-svc
            port:
              number: 80
        path: /
        pathType: ImplementationSpecific
</pre>
In the example above, user requests to both 'blue.example.com' and 'green.example.com' would go to the same Ingress endpoint, and, from there, they would be forwarded to 'webserver-blue-svc', and 'webserver-green-svc', respectively. Here we used a 'Name-Based Virtual Hosting' Ingress rule.

<pre>
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: fan-out-ingress
  namespace: default
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /blue
        backend:
          service:
            name: webserver-blue-svc
            port:
              number: 80
        pathType: ImplementationSpecific
      - path: /green
        backend:
          service:
            name: webserver-green-svc
            port:
              number: 80
        pathType: ImplementationSpecific
</pre>
Here requests to 'example.com/blue' and 'example.com/green' would be forwarded to 'webserver-blue-svc' and 'webserver-green-svc' respectively. Here we used a 'fanout' ingress rule.

### Advanced topics
#### Annotations
When creating a kubernetes object in .yaml, annotations, which are simply notes surrounding the object, can be added.
<pre>
apiVersion: apps/v1
kind: Deployment
metadata:
  name: webserver
  annotations:
    description: Deployment based PoC dates 2nd Mar'2022
</pre>
When displaying the object like this `kubectl describe deployment webserver` the annotations will appear too.

#### Quotas
A kubernetes cluster is subdivided into multiple parts, those should share the same amount of resources. One part cannot use resources at the detriment of other parts.

Administrators can use the **ResourceQuota API resource** to provide constraints that limit aggregate resource consumption per Namespace.<br>
We can set the following types of quotas per Namespace:
* Compute Resource Quota
  * Consists of limiting the total sum of compute resources (CPU, memory, etc.) that can be requested in a given Namespace.
* Storage Resource Quota
  * Consists of limiting the total sum of storage resources (PersistentVolumeClaims, requests.storage, etc.) that can be requested.
* Object Count Quota
  * Consists of restricting the number of objects of a given type (pods, ConfigMaps, PersistentVolumeClaims, ReplicationControllers, Services, Secrets, etc.).

An additional resource that helps limit resources allocation to pods and containers in a namespace, is the **LimitRange**.<br>
A LimitRange can:
* Set compute resources usage limits per Pod or Container in a namespace.
* Set storage request limits per PersistentVolumeClaim in a namespace.

The difference between ResourceQuota and LimitRange is that the former acts on the namespace level while the latter is more specific and acts on pods, containers, volumes inside the namespaces. 

#### Autoscaling
Autoscaling can be implemented in a Kubernetes cluster via controllers which periodically adjust the number of running objects based on single, multiple, or custom metrics.

Here are the different autoscaler types:
* Horizontal Pod Autoscaler (HPA)
  * Adjusts the number of replicas based on CPU utilization.
* Vertical Pod Autoscaler (VPA)
  * Automatically sets Container resource requirements (CPU and memory) in a Pod and dynamically adjusts them based on historical utilization data, current resource availability and real-time events.
* Cluster Autoscaler
  * Automatically re-sizes the Kubernetes cluster when there are insufficient resources available for new Pods expecting to be scheduled or when there are underutilized nodes in the cluster.

#### Helm
Large kubernetes applications can contain lots of kuberneted objects. Deploying those manually one by one can be time consuming.<br>
A solution would be to bundle the kubernetes application into one repository that can be downloaded in one command. We call such a bundled kubernetes application a **Chart**.

**Helm** is a package manager for Kubernetes, which can install/update/delete those Charts in the Kubernetes cluster.<br>
Charts submitted for Kubernetes are available on https://artifacthub.io/.

## Free tutorials
### Ancient related notes
https://github.com/artainmo/ft_services/blob/master/notes.txt

## Resources
[edX - Introduction to Kubernetes](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS158x+1T2022/home)
