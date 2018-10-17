import React from 'react';
import { Row, Col, Card } from 'antd';
import D3VerticalBPChart from '../components/charts/D3VerticalBPChart';

class VerticalBPChart extends React.Component {
    render() {

        const data = [['docker/docker', 'docker/docker', 194], ['tensorflow/tensorflow', 'docker/docker', 3], ['ipython/ipython', 'SickRage/SickRage', 167], ['BD2KGenomics/toil-new', 'SickRage/SickRage', 4], ['juju/charm-tools', 'SickRage/SickRage', 2], ['nodejs/io.js', 'nodejs/node', 154], ['wet-boew/wet-boew', 'nodejs/node', 2], ['igarape/mogi-server', 'nodejs/node', 2], ['jspm/jspm-cli', 'Microsoft/vscode', 132], ['Microsoft/vscode', 'Microsoft/vscode', 33], ['jquery/globalize', 'Microsoft/vscode', 3], ['Graylog2/graylog2-web-interface', 'Homebrew/legacy-homebrew', 2], ['caskroom/homebrew-versions', 'Homebrew/legacy-homebrew', 2], ['MinecraftForge/MinecraftForge', 'Chisel-Team/Chisel', 19], ['SpongePowered/SpongeForge', 'Chisel-Team/Chisel', 6], ['ros2/system_tests', 'ros2/rclcpp', 10], ['ament/ament_package', 'ros2/rclcpp', 3], ['sstephenson/sprockets', 'rails/rails', 99], ['Polymer/polymer', 'Polymer/polymer', 53], ['ros/catkin', 'ros/rosdistro', 20], ['CocoaPods/CocoaPods', 'mapbox/mapbox-gl-native', 13], ['tombatossals/angular-leaflet-directive', 'TerriaJS/terriajs', 12], ['pelias/api', 'pelias/api', 5], ['wooorm/remark', 'zurb/foundation-sites', 4], ['ramda/ramda', 'sanctuary-js/sanctuary', 4], ['NativeScript/NativeScript', 'driftyco/ionic', 4], ['appium/appium', 'appium/appium', 4], ['domokit/mojo', 'flutter/engine', 3], ['mozilla-services/cliquet', 'mozilla-services/kinto-dist', 3], ['snarfed/bridgy', 'snarfed/bridgy', 3], ['Itseez/opencv', 'opencv/opencv', 3], ['openhab/openhab2', 'eclipse/smarthome', 3], ['quintel/etmoses', 'quintel/etmodel', 3], ['junit-team/junit-lambda', 'junit-team/junit-lambda', 3], ['broadinstitute/gatk', 'broadinstitute/picard', 3], ['rovo89/Xposed', 'rovo89/android_art', 3], ['mxabierto/dgm', 'mxabierto/dgm', 3], ['numenta/nupic', 'numenta/nupic.core', 3], ['genome/civic-server', 'genome/civic-client', 2], ['slipstream/SlipStreamServer', 'slipstream/SlipStreamServer', 2], ['zaproxy/zaproxy', 'zaproxy/zaproxy', 2], ['bpmn-io/diagram-js', 'camunda/camunda-modeler', 2], ['martinisgroup/servers', 'martinisgroup/servers', 2], ['dotnet/llilc', 'dotnet/llilc', 2], ['noseglid/atom-build', 'noseglid/atom-build', 2], ['owncloud/client', 'meteor/meteor', 2], ['vatesfr/xo-server', 'vatesfr/xo-web', 2], ['rackerlabs/nexus-control', 'deconst/deconst-docs', 2], ['aframevr/aframe-core', 'aframevr/aframe', 2], ['18F/openFEC', 'jekyll/jekyll', 6.0], ['18F/openFEC', '18F/guides-template', 6.0], ['18F/openFEC', '18F/openFEC-web-app', 6.0]];


        return (
            <div className="gutter-example virtical-bp-chart-demo">
                <Row gutter={10}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="2015下到2016上" bordered={false}>
                                <D3VerticalBPChart data={data} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default VerticalBPChart;
